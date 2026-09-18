import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;
};

const SITE_URL = "https://portfolio-mednov.vercel.app";

const setMetaContent = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  let meta = document.querySelector<HTMLMetaElement>(selector);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
};

const Seo = ({ title, description, path }: SeoProps) => {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path}`;
    // La pestaña lleva solo el nombre de la vista; al compartir hace falta
    // saber de quién es el sitio, así que ahí se añade el nombre.
    const shareTitle = title.includes("MedNov") ? title : `${title} · Dimitri MedNov`;
    document.title = title;
    setMetaContent('meta[name="description"]', "name", "description", description);
    setMetaContent('meta[property="og:title"]', "property", "og:title", shareTitle);
    setMetaContent('meta[property="og:description"]', "property", "og:description", description);
    setMetaContent('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', "name", "twitter:title", shareTitle);
    setMetaContent('meta[name="twitter:description"]', "name", "twitter:description", description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [description, path, title]);

  return null;
};

export default Seo;
