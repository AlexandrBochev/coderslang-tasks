export const init = (term) => {
  term('Welcome to the mining game!');
  term.clear();
  term.hideCursor();
  term.grabInput();
};