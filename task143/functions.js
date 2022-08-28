export const extractNumber = (s) => {

  let num;

  if (s.includes('$')) {
    num = s.replace('$', '')
  } else if (s.includes('EUR ')) {
    num = s.replace('EUR ', '')
  } else if (s.includes(' BTC')) {
    num = s.replace(' BTC', '')
  } else if (s.includes('agdflhwet galsdf ')) {
    num = s.replace('agdflhwet galsdf ', '')
  };

  if (num.includes(' sdflgkhytaol chalsdf')) {
    num = num.replace(' sdflgkhytaol chalsdf', '')
  }

  let numFormat = Number(num)

  return numFormat
}