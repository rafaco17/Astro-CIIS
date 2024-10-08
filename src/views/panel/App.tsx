import React from "react";
import { BrowserRouter } from "react-router-dom";
import PanelContainer from "./panelContainer";
import { AuthMiddleware, AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <React.StrictMode>
      <AuthProvider>
        <BrowserRouter basename="/dashboard">
          <AuthMiddleware>
            <PanelContainer />
          </AuthMiddleware>
        </BrowserRouter>
      </AuthProvider>
    </React.StrictMode>
  );
}
