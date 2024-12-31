import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import AuthProvider from "./providers/AuthProvider"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider> {/* Use AuthProvider here */}
      <HelmetProvider>
        <div className="max-w-screen-2xl mx-auto">
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
