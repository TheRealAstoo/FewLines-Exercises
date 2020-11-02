import React, { useState } from "react";

export const HideOrNotHide = () => {
  const [isVisible, setIsVisible] = useState(true);

  let text;
  if (isVisible === true) {
    text = <p>Cliquez ici</p>;
  } else {
    text = null;
  }

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>{text}</button>
    </div>
  );
};
