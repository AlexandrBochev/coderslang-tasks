export const isShortWord = (s) => {

  let result = s.includes(' ') || s.length > 10
  return !result

}

