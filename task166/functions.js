export const startCountdown = (n) => {

  const stopInterval = setInterval(() => {

    console.log(n)

    if (1 < n) {
      n = n - 1
    } else {
      clearInterval(stopInterval)
      console.log('GO!');
    }

  }, 100)

}