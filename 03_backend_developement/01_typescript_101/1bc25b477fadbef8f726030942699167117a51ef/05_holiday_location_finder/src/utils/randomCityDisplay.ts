import { CITIES } from "../data/data";

const randomCityDisplay = (formatedInput: string) :void => {
  for (const [key, value] of Object.entries(CITIES)) {
    if (key == formatedInput) {
      console.log(`Vous avez choisit ${formatedInput}, je vous conseille d'aller à ${value[Math.floor(Math.random() * value.length)]}`)
    }
  }
}

export default randomCityDisplay;