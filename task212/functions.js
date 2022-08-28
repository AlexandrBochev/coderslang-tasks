export const getApples = (item) => {
  let result = item => item.type === 'apple';
  return item.filter(result)
};
