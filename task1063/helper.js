export const concatenateArraysUnique = (arr1, arr2) => {

  const concatArr = arr1.concat(arr2);
  const newSet = new Set(concatArr);
  const newArr = [...newSet]

  return newArr
}