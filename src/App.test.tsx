import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

const renderAt = (path: string) => {
  window.history.pushState({}, "", path);
  return render(<App />);
};

describe("portfolio routes", () => {
  it("renders the home content and semantic section links", () => {
    renderAt("/");

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("AI Software Engineer");
    expect(screen.getByRole("link", { name: "View Projects" })).toHaveAttribute("href", "#projects");
    expect(screen.getAllByRole("link", { name: "About" })[0]).toHaveAttribute("href", "/about");
    expect(screen.getByRole("heading", { name: /My Projects/i })).toBeInTheDocument();
  });

  it("renders the about route and updates route metadata", async () => {
    renderAt("/about");

    expect(await screen.findByRole("heading", { level: 1, name: /About Me/i })).toBeInTheDocument();
    await waitFor(() => {
      expect(document.title).toBe("About Dimitri MedNov — Experience and Technologies");
      expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute(
        "href",
        "https://portfolio-mednov.vercel.app/about",
      );
    });
    expect(screen.getAllByRole("link", { name: "Projects" })[0]).toHaveAttribute("href", "/#projects");
  });

  it("renders the not-found route", async () => {
    renderAt("/missing-page");

    expect(await screen.findByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Return to Home" })).toHaveAttribute("href", "/");
  });
});
