import { useEffect, useId, useRef } from "react";

const CAM = 460;
const CENTER = 160;

type Vec = [number, number, number];

/** Vértices de un icosaedro al radio pedido. */
const icosahedron = (r: number): Vec[] => {
  const phi = (1 + Math.sqrt(5)) / 2;
  const raw: Vec[] = [];
  for (const s1 of [-1, 1]) {
    for (const s2 of [-1, 1]) {
      raw.push([0, s1, s2 * phi], [s1, s2 * phi, 0], [s2 * phi, 0, s1]);
    }
  }
  const len = Math.hypot(1, phi);
  return raw.map(([x, y, z]) => [(x / len) * r, (y / len) * r, (z / len) * r]);
};

/** Vértices de un octaedro al radio pedido. */
const octahedron = (r: number): Vec[] => [
  [r, 0, 0],
  [-r, 0, 0],
  [0, r, 0],
  [0, -r, 0],
  [0, 0, r],
  [0, 0, -r],
];

/** Aristas: los pares más cercanos, que son los lados de la figura. */
const edgesOf = (vertices: Vec[]) => {
  const dist = (a: Vec, b: Vec) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);
  let min = Infinity;
  vertices.forEach((a, i) => vertices.forEach((b, j) => i < j && (min = Math.min(min, dist(a, b)))));
  const out: [number, number][] = [];
  vertices.forEach((a, i) => vertices.forEach((b, j) => i < j && dist(a, b) < min * 1.05 && out.push([i, j])));
  return out;
};

/** Puntos repartidos sobre una esfera, para el polvo de alrededor. */
const sphereDust = (count: number, r: number): Vec[] => {
  const golden = Math.PI * (3 - Math.sqrt(5));
  return Array.from({ length: count }, (_, i) => {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    return [Math.cos(theta) * radius * r, y * r, Math.sin(theta) * radius * r] as Vec;
  });
};

/**
 * Capas de la figura. Cada una gira a su ritmo y en su sentido, así que la
 * silueta nunca se repite: es lo que da la sensación de volumen.
 */
const LAYERS = [
  {
    vertices: icosahedron(112),
    spin: 0.00026,
    tilt: 0.4,
    tiltRate: 0.00019,
    roll: 0.16,
    rollRate: 0.00011,
    stroke: "--blue",
    width: 1.5,
    node: [5.5, 8] as const,
    tokens: ["--blue", "--purple", "--pink", "--teal"],
    edges: true,
  },
  {
    vertices: octahedron(54),
    spin: -0.00044,
    tilt: 0.55,
    tiltRate: 0.00027,
    roll: 0.3,
    rollRate: 0.00017,
    stroke: "--pink",
    width: 1.3,
    node: [3.5, 4.5] as const,
    tokens: ["--pink", "--teal"],
    edges: true,
  },
  {
    vertices: sphereDust(22, 148),
    spin: 0.00011,
    tilt: 0.22,
    tiltRate: 0.00009,
    roll: 0,
    rollRate: 0,
    stroke: "--line",
    width: 1,
    node: [1.4, 2.4] as const,
    tokens: ["--teal", "--blue", "--purple"],
    edges: false,
  },
];

/**
 * Nube de nodos girando en tres ejes y a tres profundidades. La proyección se
 * calcula por cuadro y se escribe directo en el DOM, sin pasar por el estado de
 * React. Con `prefers-reduced-motion` se dibuja una sola pose y se detiene.
 *
 * `phase` adelanta el reloj: varias copias comparten figura pero nunca caen en
 * la misma pose, así que el grupo no late al unísono.
 *
 * Además va a la deriva dentro de su caja y rebota en los bordes, como el viejo
 * salvapantallas: el giro es propio de la figura, el paseo es del contenedor.
 */
const GraphOrb = ({ phase = 0 }: { phase?: number }) => {
  const glow = `orb-glow-${useId().replace(/[^\w-]/g, "")}`;
  const nodeRefs = useRef<(SVGCircleElement | null)[][]>(LAYERS.map(() => []));
  const edgeRefs = useRef<(SVGLineElement | null)[][]>(LAYERS.map(() => []));
  const coreRef = useRef<SVGCircleElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    // Paseo: posición y velocidad en píxeles por segundo, con rebote elástico.
    const drift = { x: 0, y: 0, vx: 32, vy: 46, last: 0 };

    const walk = (now: number) => {
      const box = boxRef.current;
      const orb = orbRef.current;
      if (!box || !orb) return;

      const spanX = Math.max(0, box.clientWidth - orb.offsetWidth);
      const spanY = Math.max(0, box.clientHeight - orb.offsetHeight);
      const step = drift.last ? Math.min((now - drift.last) / 1000, 0.05) : 0;
      drift.last = now;

      drift.x += drift.vx * step;
      drift.y += drift.vy * step;

      // Al tocar un borde, se invierte esa componente y se recoloca dentro.
      if (drift.x <= 0 || drift.x >= spanX) {
        drift.vx *= -1;
        drift.x = Math.min(Math.max(drift.x, 0), spanX);
      }
      if (drift.y <= 0 || drift.y >= spanY) {
        drift.vy *= -1;
        drift.y = Math.min(Math.max(drift.y, 0), spanY);
      }

      orb.style.transform = `translate3d(${drift.x.toFixed(1)}px, ${drift.y.toFixed(1)}px, 0)`;
    };

    const draw = (now: number) => {
      const t = now + phase;
      if (!reduced) walk(now);
      LAYERS.forEach((layer, li) => {
        const ay = t * layer.spin;
        const ax = layer.tilt * Math.sin(t * layer.tiltRate);
        const az = layer.roll * Math.sin(t * layer.rollRate);
        const cosY = Math.cos(ay), sinY = Math.sin(ay);
        const cosX = Math.cos(ax), sinX = Math.sin(ax);
        const cosZ = Math.cos(az), sinZ = Math.sin(az);
        const reach = Math.max(...layer.vertices.map((v) => Math.hypot(...v))) || 1;

        const points = layer.vertices.map(([x0, y0, z0]) => {
          const x = x0 * cosY + z0 * sinY;
          let z = -x0 * sinY + z0 * cosY;
          const y = y0 * cosX - z * sinX;
          z = y0 * sinX + z * cosX;
          const scale = CAM / (CAM - z);
          return {
            x: CENTER + (x * cosZ - y * sinZ) * scale,
            y: CENTER + (x * sinZ + y * cosZ) * scale,
            depth: (z + reach) / (2 * reach),
          };
        });

        const [rMin, rGain] = layer.node;
        points.forEach((p, i) => {
          const node = nodeRefs.current[li][i];
          if (!node) return;
          node.setAttribute("cx", p.x.toFixed(2));
          node.setAttribute("cy", p.y.toFixed(2));
          node.setAttribute("r", (rMin + p.depth * rGain).toFixed(2));
          node.setAttribute("opacity", (0.34 + p.depth * 0.66).toFixed(3));
        });

        if (!layer.edges) return;
        edgesOf(layer.vertices).forEach(([a, b], i) => {
          const line = edgeRefs.current[li][i];
          if (!line) return;
          line.setAttribute("x1", points[a].x.toFixed(2));
          line.setAttribute("y1", points[a].y.toFixed(2));
          line.setAttribute("x2", points[b].x.toFixed(2));
          line.setAttribute("y2", points[b].y.toFixed(2));
          line.setAttribute("opacity", (0.1 + ((points[a].depth + points[b].depth) / 2) * 0.45).toFixed(3));
        });
      });

      if (coreRef.current) coreRef.current.setAttribute("r", (20 + 2.5 * Math.sin(t * 0.0014)).toFixed(2));

      if (!reduced) frame = requestAnimationFrame(draw);
    };

    if (reduced) draw(1800);
    else frame = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(frame);
  }, [phase]);

  return (
    <div ref={boxRef} className="relative h-full min-h-[320px] w-full lg:h-[540px]">
      <div ref={orbRef} className="absolute left-0 top-0 w-[64%] max-w-[240px] will-change-transform lg:w-[76%] lg:max-w-[340px]">
        <svg viewBox="0 0 320 320" className="w-full" role="img" aria-label="MedNov">
          <defs>
            <radialGradient id={glow} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgb(var(--purple))" stopOpacity="0.3" />
              <stop offset="65%" stopColor="rgb(var(--blue))" stopOpacity="0.08" />
              <stop offset="100%" stopColor="rgb(var(--blue))" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx={CENTER} cy={CENTER} r="158" fill={`url(#${glow})`} />

          {LAYERS.map((layer, li) =>
            layer.edges ? (
              <g key={`e${li}`} stroke={`rgb(var(${layer.stroke}))`} strokeWidth={layer.width} strokeLinecap="round">
                {edgesOf(layer.vertices).map(([a, b], i) => (
                  <line
                    key={`${a}-${b}`}
                    ref={(el) => {
                      edgeRefs.current[li][i] = el;
                    }}
                  />
                ))}
              </g>
            ) : null,
          )}

          <circle ref={coreRef} cx={CENTER} cy={CENTER} r="20" fill="rgb(var(--purple))" />

          {LAYERS.map((layer, li) => (
            <g key={`n${li}`}>
              {layer.vertices.map((_, i) => (
                <circle
                  key={i}
                  ref={(el) => {
                    nodeRefs.current[li][i] = el;
                  }}
                  fill={`rgb(var(${layer.tokens[i % layer.tokens.length]}))`}
                />
              ))}
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
};

export default GraphOrb;
