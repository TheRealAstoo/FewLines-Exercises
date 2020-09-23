type isEnumProps = Record<string, unknown>
type HalfEntryType = (string | number)[][];

/**
 * Takes an object and check if said object is of "numerical enum" type.
 * @param isEnumProps
 */
export function isEnum(object: isEnumProps): boolean {
  let isObjectEnum = true;

  const objectEntries = Object.entries(object);

  const isFirstCheckPassed = objectEntries.every(
    ([firstItem, secondItem]: unknown[]) =>
      (typeof firstItem === "string" || typeof firstItem === "number") &&
      (typeof secondItem === "string" || typeof secondItem === "number")
  );

  if (isFirstCheckPassed) {
    // We can safely dived the length by 2 as the enum wield twice the original length.
    // We also type assert `HalfEntryType` as `isFirstCheckPassed` make sure to works with strings and number.
    const firstHalf = objectEntries.slice(
      0,
      objectEntries.length / 2
    ) as HalfEntryType;

    const secondHalf: HalfEntryType = objectEntries.slice(
      objectEntries.length / 2
    ) as HalfEntryType;

    // Did this as `const x = { x: "" }` gives `firstHalf = []` and `secondHalf = ["x", ""]`.
    if (firstHalf.length === 0) {
      isObjectEnum = false;
    }

    for (let index = 0; index < firstHalf.length; index++) {
      if (firstHalf[index][1] !== secondHalf[index][0]) {
        isObjectEnum = false;
      }
    }
  } else {
    isObjectEnum = false;
  }

  return isObjectEnum;
}
