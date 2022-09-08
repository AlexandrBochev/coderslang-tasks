export const init = (term) => {
  term('Welcome to the mining game!');
  term.clear();
  term.hideCursor();
  term.grabInput();
};

export const updateGold = (term, state) => {
  term.moveTo(25,2);
  term.eraseLineAfter();
  term.bold.yellow(state.gold + '   ');

  state.gold += state.productionRate;
};

export const checkInitCompleted = (term, state) => {
	state.isInitCompleted = true;
	state.isProducerListUpdated = false;

	term.moveTo(1, 1);
	term.eraseLine();
	term('You can purchase producers by clicking the number button (1, 2, 3, ...)');
	term.moveTo(1, 2);
	term('GOLD:');
	term.moveTo(1, 3);
	term('PRODUCTION RATE:');
};

export const updateProducerList = (term, state) => {
	let j = 0;
	let isOneZeroCountPrinted = false;
	for (let i = 0; i < state.producers.length; i++) {
		if (state.producers[i].count > 0 || (!isOneZeroCountPrinted && state.producers[i].count === 0)) {
			term.moveTo(1, 5 + j);
			term(`${state.producers[i].title}: ${state.producers[i].count} | Production per second: ${state.producers[i].baseProduction.toFixed(1)} | Cost: ${state.producers[i].cost.toFixed(1)}`);
			term.eraseLineAfter();
			
			
			if (state.producers[i].count === 0){
					isOneZeroCountPrinted = true;
					
			}
			j++;
				
		}
	};
	
	state.isProducerListUpdated = true;
	
};