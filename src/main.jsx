// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// 🔹 Conditionally enable MirageJS before rendering the app
async function enableMirage() {
  if (import.meta.env.VITE_ENABLE_MIRAGE === "true") {
    const { startMirage } = await import("./api/mirage/startMirage.js");
    startMirage();
  }
}

enableMirage().then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
