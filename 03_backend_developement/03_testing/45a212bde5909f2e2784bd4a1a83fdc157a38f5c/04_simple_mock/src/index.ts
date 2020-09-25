export function helloSailor(who?: string): void {
  if (who) {
    console.log(`Howdy ${who}!`);
  } else {
    console.log("Howdy Sailor! Good day to you!");
  }
}
