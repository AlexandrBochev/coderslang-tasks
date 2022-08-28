export const handleKeyPress = (term, state) => {
  const gameTable = (name, matches, data) => {
    let key = String.fromCharCode(data.code);
    if (key === 'g' || key === 'G') {
      state.gold ++;
    }
  }
  return gameTable
}