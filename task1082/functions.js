import { getUserCount } from './db.js';
import { handleUnknownError } from './errorHandlers.js';

export const printUserCount = () => {

  return getUserCount().then(console.log).catch(handleUnknownError);

}