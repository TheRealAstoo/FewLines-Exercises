const star = { spectralClass: "M" };

const planet = {
  mass: 1.02,
  radius: 1.12,
  rotationStability: true,
  habitalZone: false,
};

function canHabitateLife(star, planet) {
  // Code the function here.

  if ((star.spectralClass === "M" || star.spectralClass === "K") && (planet.habitalZone === true) && (planet.rotationStability === true) && (((planet.radius > 0.5) && (planet.radius < 2.5) && (planet.mass > 0.5)) || (planet.mass < 0.5 && planet.radius > 1 && planet.radius < 2.5))) {
    return true;
  } 
  return false;
}

// Do not remove last lines, it is for tests
module.exports = canHabitateLife;
