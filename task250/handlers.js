export const handleKeyPress = (term, state) => {
  return function gameTable(name, matches, data) {

    let key = String.fromCharCode(data.code);
    if (key === 'g' || key === 'G') {
      state.gold ++;
    } else {

      for (let i = 0; i < state.producers.length; i++) {
        if (key === String(state.producers[i].id)) {
          state.gold -= state.producers[i].cost;
          state.producers[i].cost *= state.producers[i].growthRate;
          state.producers[i].count++;
        }
      }
    }

  }
}