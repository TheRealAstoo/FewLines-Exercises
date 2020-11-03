import React from "react";
import "../../styles/header.css";
import zelda from "../../../data/zelda.js";

const CardHeader = () => {
  return <div className="game-title">{zelda.name}</div>;
};

export default CardHeader;
