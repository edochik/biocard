import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./styles/global.module.scss";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
