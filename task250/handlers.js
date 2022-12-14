import { updateGold, checkInitCompleted, updateProducerList, } from './functions.js';

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
          const productionRate = (state.producers[i].baseProduction / 1000) * state.tickSpeed;
          state.productionRate += productionRate;
          term.green(state.productionRate);
        }
      }
    }

    let minCost = 0;

		for (const producer of state.producers) {
			if (minCost === 0 || minCost > producer.cost) {
				minCost = producer.cost;
			}
		}

    if (state.gold >= minCost && !state.isInitCompleted) {
			checkInitCompleted(term, state);
		}

    if (!state.isProducerListUpdated) {
      updateProducerList(term, state); 
    }

  }
}

export const handleStateChange = (term, state) => () => {
  updateGold(term, state);
}