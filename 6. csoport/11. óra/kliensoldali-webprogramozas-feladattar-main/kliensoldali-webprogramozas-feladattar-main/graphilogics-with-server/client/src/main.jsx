import React from "react";
import App from "./views/App";
import "./index.css";
import "./grafilogika.css";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
