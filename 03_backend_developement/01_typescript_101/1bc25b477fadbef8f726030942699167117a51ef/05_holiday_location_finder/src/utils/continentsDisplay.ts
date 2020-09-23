import { CONTINENTS } from "../data/data";

const continentDisplay = () :void => {

  for (const CONTINENT in CONTINENTS) {
    if (isNaN(Number(CONTINENT))) {
        console.log(`- ${CONTINENT}`);
    }
  }
}

export default continentDisplay;