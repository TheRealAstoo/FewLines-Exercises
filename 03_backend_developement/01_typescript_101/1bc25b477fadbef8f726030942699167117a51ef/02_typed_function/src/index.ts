function handleTuple(tuple: [string, number]): void {
  if (typeof (tuple[0]) === "string") {
    console.log(`${tuple[0]} ${typeof tuple[0]}`);
  }
  if (typeof (tuple[1]) === "number") {
    console.log(`${tuple[1]} ${typeof tuple[1]}`);
  }
}


// Leave the line below for tests to work properly.
export { handleTuple };