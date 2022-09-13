import { sleep } from "./helper";

export const writeLog = async (m, delay = 100, randomized) => {
  if (randomized === true) {
    randomized = Math.random(delay);
  }
  if (randomized === false) {
    randomized = delay;
  }
  for (let i = 0; i < m.length; i++) {
    process.stdout.write(m[i]);
    await sleep(randomized);
  }
  process.stdout.write(`\n`);
}

export const funkylog = (object) => {
  return (message) => writeLog(message,object.delay,object.randomized)
}

