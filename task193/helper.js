export const bakeMyCake = (ingredients) => {
  console.log(`Baking a cake!`)

  const result = {
    type: 'cake',
    from: ingredients
  }

  if (result.from === undefined) {
    throw new Error('an error!')
  } else {
    return result
  }

}
