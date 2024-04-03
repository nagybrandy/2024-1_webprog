import React from "react";
import { createRoot } from "react-dom";

import { App } from "./views/App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
