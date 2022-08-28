import { init } from './functions.js'
import { handleKeyPress } from "./handlers.js";

export const startMiningGame = (term, state) => {
  init(term);
  const handler = handleKeyPress(term, state);
  term.on('key', handler)
};