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
}