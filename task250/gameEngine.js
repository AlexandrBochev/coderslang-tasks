import { init } from './functions.js'
import { handleKeyPress, handleStateChange } from "./handlers.js";

export const startMiningGame = (term, state) => {
  init(term);
  const handler = handleKeyPress(term, state);
  term.on('key', handler);
  setInterval(handleStateChange(term, state), Number(state.tickSpeed));
};