import React from "react";
import ReactDOM from "react-dom/client";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import './Styles/global.styles.css'

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
