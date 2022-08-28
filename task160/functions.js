export const delayedLog = (s, n) => {
  console.log(s);

  setTimeout(() => {
    delayedLog
  }, n*1000);
}