/**
 * This file defines the root of the development application.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Component from "./Component";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
  <StrictMode>
    <Component />
  </StrictMode>
);
