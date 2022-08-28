export const getCar = (numberOfPassengers) => {

  if (numberOfPassengers > 4) {
    throw new Error('Ups!!')
  } else {
    return `Here's your car for ${numberOfPassengers} passengers`;
  }

}
