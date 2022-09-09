export const formatNumber = (n) => {

  if ( n < 1000 ) {
    return n.toFixed(1);
  }
  if ( (n >= 1000) && (n < 1000000) ) {
      return (n/1000).toFixed(2) + 'K';
  }
  if ( (n >= 1000000) && (n < 1000000000)) {
      return (n/1000000).toFixed(2) + 'M';
  }
  if ( (n >= 1000000000) && (n < 1000000000000)) {
      return (n/1000000000).toFixed(2) + 'B';
  }
  if (n >= 1000000000000) {
      return (n/1000000000000).toFixed(2) + 'T';
  }

//   if (n >= 1000000000000) {
//     return (n/1000000000000*1000).toFixed(2) + 'aa';
// }

}