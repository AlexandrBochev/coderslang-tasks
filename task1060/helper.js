export const max = (a, b, c) => {
  let result;
  
  if (a > b && a > c) {
    result = a;
  } else if (b > a && b > c) {
    result = b;
  } else {
    result = c;
  }

  return result
}