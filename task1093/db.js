import { loadData } from './storage.js';

export const getUser = (userId) => new Promise((resolve, reject) => {
  //check userId and reject if it's missing
  if (!userId) {
    reject (new Error ('No User Id!'));
  }

  setTimeout(() => {
    //use loadData and resolve with the user object if the id is present
    const db = loadData();
    for (let i = 0; i < db.users.length; i++) {
      if(db.users[i].id === userId) {
        resolve(db.users[i]) 
      }
    }
  }, 200);
});