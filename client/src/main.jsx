import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Toaster } from "@/components/ui/sonner";

import "./index.css";
import { SocketProvider } from "./contexts/SocketContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SocketProvider>
    <App />
    <Toaster closeButton richColors />
  </SocketProvider>
);
