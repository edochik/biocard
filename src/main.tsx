import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./styles/global.module.scss";
import App from "./app/App.tsx";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <App />
    </MantineProvider>
  </StrictMode>
);
