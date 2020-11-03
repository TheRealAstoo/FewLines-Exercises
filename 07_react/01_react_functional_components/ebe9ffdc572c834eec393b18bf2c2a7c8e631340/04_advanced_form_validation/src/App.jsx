import React from "react";

import "./styles/app.css";
import ContactForm from "./components/ContactForm";

export const App = () => {
  return (
    <div id="app" className="container default-flex">
      <ContactForm />
    </div>
  );
};
