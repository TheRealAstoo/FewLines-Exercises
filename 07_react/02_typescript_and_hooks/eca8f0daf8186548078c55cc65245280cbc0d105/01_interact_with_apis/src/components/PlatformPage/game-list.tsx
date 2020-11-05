import React from "react";

type gameSelectedType = {
  gameSelected: string;
};

const GameList: React.FC<gameSelectedType> = ({ gameSelected }) => {
  return <h1>{gameSelected}</h1>;
};

export default GameList;
