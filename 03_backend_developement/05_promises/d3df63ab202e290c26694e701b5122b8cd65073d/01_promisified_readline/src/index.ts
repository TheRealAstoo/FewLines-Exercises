// ⚠️ Don't change this file

import ask from "./ask";
import { closeRl } from "./reader";

ask("Enter something\n> ")
  .then((input) => {
    console.log(`Your input is:\n"${input}"`);
    closeRl(); // Close the reader at the end of the resolution
  })
  .catch((e) => {
    closeRl(); // Close the reader when an error occured
    console.error(e);
  });
