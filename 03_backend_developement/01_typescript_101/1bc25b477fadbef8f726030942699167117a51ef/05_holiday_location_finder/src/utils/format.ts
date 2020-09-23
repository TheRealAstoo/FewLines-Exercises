// Format user input.
const sanitizeUserInput = (input: string) :string => {
  const noSymbolesInput: string = input.replace(/[^a-zA-Z ]/g, "")
  if (noSymbolesInput.includes("europe")) {
    return "Europe"
  } else if (noSymbolesInput.includes("Europe")) {
      return "Europe"
  } else if (noSymbolesInput.includes("north" || "america")) {
    return "NorthAmerica"
  } else if (noSymbolesInput.includes("North" || "America")) {
    return "NorthAmerica"
  } else if (noSymbolesInput.includes("NorthAmerica")) {
    return "NorthAmerica"
  } else if (noSymbolesInput.includes("SouthAmerica")) {
    return "SouthAmerica"
  } else if (noSymbolesInput.includes("south" || "America")) {
    return "SouthAmerica"
  } else if (noSymbolesInput.includes("Africa" || "africa")) {
    return "Africa"
  } else if (noSymbolesInput.includes("South" || "America")) {
    return "SouthAmerica"
  } else {
    return "Nous ne trouvons pas ce continent dans notre DB, vérifiez votre orthographe svp ☺️"
  }
}

// Leave the line below for tests to work properly.
export { sanitizeUserInput };
