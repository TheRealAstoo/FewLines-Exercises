import { dumbUtilFunction } from "./dumbUtilFunction";

dumbUtilFunction(true)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
