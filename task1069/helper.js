export const formatNumber = (n) => {

  const k = 1000;
  const m = k * k;
  const b = m * k;
  const t = b * k;
  const aa = t * k;
  const ab = aa * k;
  const ac = ab * k;

  console.log(BigInt(ac));

  if (n < k) {
    return n.toFixed(1);
  } else  if (n >= k && n < m) {
    return (n / k).toFixed(2) + 'K'
  } else  if (n >= m && n < b) {
    return (n / m).toFixed(2) + 'M'
  } else  if (n >= b && n < t) {
    return (n / b).toFixed(2) + 'B'
  } else  if (n >= t && n < aa) {
    return (n / t).toFixed(2) + 'T'
  } else  if (n >= aa && n < ab) {
    return BigInt((n / aa).toFixed(2) + 'aa')
  }


  // if ( n < 1000 ) {
  //   return n.toFixed(1);
  // }
  // if ( (n >= 1000) && (n < 1000000) ) {
  //     return (n/1000).toFixed(2) + 'K';
  // }
  // if ( (n >= 1000000) && (n < 1000000000)) {
  //     return (n/1000000).toFixed(2) + 'M';
  // }
  // if ( (n >= 1000000000) && (n < 1000000000000)) {
  //     return (n/1000000000).toFixed(2) + 'B';
  // }
  // if (n >= 1000000000000) {
  //     return (n/1000000000000).toFixed(2) + 'T';
  // }

}

formatNumber()

