export const getObjectKeys = (obj) => {

  const result = [];

  for (const key in obj) {
   result.push(key);
  }

  return result
}