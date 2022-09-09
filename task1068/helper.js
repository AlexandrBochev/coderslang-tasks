export const revertMe = (s) => {

  const massive = s.split('');
  const masReverse = massive.reverse();
  const strReverse = masReverse.join('');

  return strReverse;
}