export const allTheSame = (x, y, z) => {
  
  if (x === y && x === z && y === x && y === z) {
    return true
  } else {
    return false
  }
}