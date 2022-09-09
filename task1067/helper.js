export const isPalindrome = (s) => {

  let result = false;

  const massive = s.split('');
  const masReverse = massive.reverse();
  const strReverse = masReverse.join('');

  if (s === strReverse) {
    result = true;
  }

  return result

}