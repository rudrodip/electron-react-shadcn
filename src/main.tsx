import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "./styles/globals.css";
import Providers from "@/components/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers>
      <main className="h-screen">
        <App />
      </main>
    </Providers>
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});
