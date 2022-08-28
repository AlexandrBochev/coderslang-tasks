export const isIdentical = (x, y) => {
  
  let xlength = Object.keys(x).length
  let ylength = Object.keys(y).length
  let result = true

  if (xlength === ylength) {
    for (const key in x) {
      if (x[key] !== y[key]) {
        result = false;
      }
    }
  } else {
    return false;
  }

  return result;

}