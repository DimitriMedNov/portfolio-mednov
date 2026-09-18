import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import App from "./App";

const renderAt = (path: string) => {
  window.localStorage.clear();
  window.history.pushState({}, "", path);
  return render(<App />);
};

describe("console views", () => {
  it("renders the identity view", () => {
    renderAt("/");

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Jesus D'mitri");
    expect(screen.getByRole("link", { name: /View systems/i })).toHaveAttribute("href", "/systems");
    expect(screen.getByRole("link", { name: "Builds" })).toHaveAttribute("href", "/projects");
  });

  it("marks the active tab on each view", async () => {
    renderAt("/systems");

    expect(await screen.findByRole("heading", { name: /Systems — private work/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Systems" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Identity" })).not.toHaveAttribute("aria-current");
  });

  it("renders the builds view with live demo links", async () => {
    renderAt("/projects");

    expect(await screen.findByRole("heading", { name: /Public builds/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ShopEdge/ })).toHaveAttribute(
      "href",
      "https://shop-edge-seven.vercel.app/",
    );
  });

  it("renders the resume and updates route metadata", async () => {
    renderAt("/about");

    expect(await screen.findByRole("heading", { name: /Resume/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Skills, certifications/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Head of IT & Software Engineering/i })).toBeInTheDocument();
    await waitFor(() => {
      expect(document.title).toBe("Resume");
      expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
        "href",
        "https://portfolio-mednov.vercel.app/about",
      );
    });
  });

  it("renders the not-found view", async () => {
    renderAt("/missing-page");

    expect(await screen.findByRole("heading", { level: 1, name: "404" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Return to identity/i })).toHaveAttribute("href", "/");
  });

  it("switches language and theme from the header", async () => {
    const user = userEvent.setup();
    renderAt("/");

    await user.click(screen.getByRole("button", { name: /Ver en español/i }));
    expect(await screen.findByRole("link", { name: "Identidad" })).toBeInTheDocument();
    expect(document.documentElement.lang).toBe("es");

    await user.click(screen.getByRole("button", { name: /Cambiar a modo claro/i }));
    expect(document.documentElement.dataset.theme).toBe("light");
  });
});
