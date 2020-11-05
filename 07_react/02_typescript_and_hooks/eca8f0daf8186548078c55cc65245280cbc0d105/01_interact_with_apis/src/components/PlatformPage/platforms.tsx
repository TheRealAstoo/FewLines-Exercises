import React, { useState } from "react";
import "../../styles/platformPage/platforms.css";

import { Platform } from "../../types/Platform";

import GameList from "./game-list";

const Platforms = (): JSX.Element => {
  const [platforms, setPlatforms] = useState<Platform[]>([]);
  const [selection, setSelection] = useState<string>("");
  const [selectedPlatform, setSelectedPlatform] = React.useState<Platform>();

  React.useEffect(() => {
    fetch(`https://videogames-sparta.herokuapp.com/platforms/`, {
      method: "GET",
      headers: new Headers({
        accept: "application/json",
      }),
    })
      .then((response: Response) => response.json())
      .then((response) => {
        console.log(response);
        setPlatforms(response);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [selection]);

  // Version du event à la façon pure JS (comme si on avait un event handler):
  // function changeInput(event: React.ChangeEvent<HTMLSelectElement>) {
  //   let selected;

  //   selected = event.target.value;
  //   setPlatformSelected(selected);
  // }

  return (
    <div className="container platform-container">
      <div className="col-md-3">
        <select
          className="form-control"
          value={selection}
          onChange={(event) => {
            setSelectedPlatform(
              platforms.find(
                (platform) => platform.slug === event.target.value,
              ),
            );
            setSelection(event.target.value);
          }}
        >
          {platforms.map((platform) => {
            return (
              <option key={platform.slug} value={platform.slug}>
                {platform.name}
              </option>
            );
          })}
        </select>
        <GameList gameSelected={selectedPlatform} />
      </div>
    </div>
  );
};

export default Platforms;
