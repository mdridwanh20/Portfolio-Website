
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRouter from "./AppRouter/AppRouter.jsx";

createRoot(document.getElementById("root")).render(

  <BrowserRouter>
  
    <AppRouter></AppRouter>

  </BrowserRouter>
);
