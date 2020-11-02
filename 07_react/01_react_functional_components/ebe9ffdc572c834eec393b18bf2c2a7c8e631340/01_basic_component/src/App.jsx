import React from "react";

import { HideOrNotHide } from "./components/HideOrNotHide";
import "./styles/app.css";

export const App = () => {
  return (
    <div id="app" className="container default-flex">
      <HideOrNotHide />
    </div>
  );
};
