import { Interface } from "readline";
import greetUser from "./utils/greetUser";
import { sanitizeUserInput } from "./utils/format";
import continentDisplay from "./utils/continentsDisplay";
import randomCityDisplay from "./utils/randomCityDisplay";

function holidayLocationFinder(reader: Interface): void {
  greetUser();

  continentDisplay();

  reader.question("Please input your choice:\n >", (continentInput: string) => {
    const formatedInput: string = sanitizeUserInput(continentInput);
    
    randomCityDisplay(formatedInput);
  })
}

// Leave the line below for tests to work properly.
export { holidayLocationFinder };
