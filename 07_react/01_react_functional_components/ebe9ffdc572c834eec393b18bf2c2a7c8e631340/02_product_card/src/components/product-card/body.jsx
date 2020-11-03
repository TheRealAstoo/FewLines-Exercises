import React, { useState } from "react";
import zelda from "../../../data/zelda";
import "../../styles/card-body.css";

const CardBody = () => {
  const [screenshotsVisibility, setScreenshotsVisibility] = useState(false);

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-5 col-sm-12">
          <img src={zelda.cover.url} alt="zelda-cover" className="cover-image" />
        </div>
        <div className="col-md-7 col-sm-12">
          <div id="right-card-content">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <p>{zelda.first_release_date}</p>
                <div className="row">
                  {zelda.genres.map((genre) => (
                    <p>{genre.name}</p>
                  ))}
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                {zelda.platforms.map((platform) => (
                  <img src={platform.platform_logo.url} className="platform-logo" alt={platform} />
                ))}
              </div>
            </div>
            <p id="summary">{zelda.summary}</p>
          </div>
        </div>
      </div>
      <div className="row screenshots-bg">
        <button
          onClick={() => setScreenshotsVisibility(!screenshotsVisibility)}
          className={screenshotsVisibility ? "button-screenshots-close" : "button-screenshots-text"}
        >
          {screenshotsVisibility ? "X" : "Show screenshots"}
        </button>
        {zelda.screenshots.map((screenshot) => (
          <div className="col-md-6 col-sm-12">
            <img src={screenshot.url} className="screenshot-image" alt={screenshot.url} />
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CardBody;
