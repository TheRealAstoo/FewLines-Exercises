/**
 * Check if the object has the same keys as the enum
 * `enum` can't be used to name a params, that's why I had to use `enumObject`
 * @param object
 * @param enumObject
 */
export function isObjectKeysFromEnum(
  object: Record<string, unknown>,
  enumObject: Record<string, unknown>
): boolean {
  const objectKeys = Object.keys(object);
  const enumKeys = Object.entries(enumObject);

  for (let i = 0; i < objectKeys.length; ++i) {
    if (objectKeys[i] !== enumKeys[i][1]) return false;
  }

  return true;
}
