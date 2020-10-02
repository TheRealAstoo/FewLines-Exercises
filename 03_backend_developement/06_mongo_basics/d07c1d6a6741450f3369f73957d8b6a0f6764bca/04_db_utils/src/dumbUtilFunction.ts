export function dumbUtilFunction(bool: boolean): Promise<boolean> {
  return new Promise((resolve, reject) => {
    if (bool === true) {
      resolve(true);
    } else {
      reject(false);
    }
  });
}
