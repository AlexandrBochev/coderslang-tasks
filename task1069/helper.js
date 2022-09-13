export const formatNumber = (n) => {

  const K = 1000;
  const M = 1000000;
  const B = 1000000000;
  const T = 1000000000000;
  let res = 0;

  const exhibitor = Math.pow(10, n.toString().length - 1);
  const resultNumber = (n / exhibitor).toFixed(2);

  const numberForSuffix = () => {
    let test = (n / 1000).toFixed(0);
    let i = -1;
    while (test > 0) {
      ++i;
      test = (test / 1000).toFixed(0);
    }
    return i;
  }

  const getSuffix = (num) => {

    const arrayChar = [];
    const numChar = (num / 26).toFixed(0);
    const nChar = num % 26;

    for (let i = 97; i <= 122; i++) {
      arrayChar.push(String.fromCharCode(i));
    }
    
    return arrayChar[numChar] + arrayChar[nChar];
    
  }

  if (n > T * 10) {
    return resultNumber + getSuffix(numberForSuffix() - 4);
  } else if (n >= T) {
    res = n / T;
    return res.toFixed(2) + 'T';
  } else if (n >= B) {
    res = n / B;
    return res.toFixed(2) + 'B';
  } else if (n >= M) {
    res = n / M;
    return res.toFixed(2) + 'M';
  } else if (n >= K) {
    res = n / K;
    return res.toFixed(2) + 'K';
  } else {
    return n.toFixed(1);
  }

}



