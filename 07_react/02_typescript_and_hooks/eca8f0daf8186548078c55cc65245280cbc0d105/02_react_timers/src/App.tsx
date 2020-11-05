import React from "react";
import "./styles/app.css";
import TimersList from "./components/TimersList";

export const App: React.FC = () => {
  return (
    <div id="app" className="container d-flex justify-content-center mt-5">
      <TimersList />
    </div>
  );
};
