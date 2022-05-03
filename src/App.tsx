/**
 * This file defines the root of the development application.
 */
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { setup } from "goober";
import Component from "./Component";

setup(React.createElement);

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Component />
  </StrictMode>
);
