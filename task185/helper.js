export const isKeyPresent = (obj, key) => {
  let result = false;
  for (const keys in obj) {
    if (key === keys) {
      result = true
    }
  };
  return result
}