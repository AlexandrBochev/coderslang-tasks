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
}