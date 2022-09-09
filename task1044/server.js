import express from 'express';
import { logRequestTimestamp, logger } from './middleware.js';

const server = express();
server.use(logRequestTimestamp);
server.use(logger)

server.get('/', (req, res) => {
  res.send('Learning to use middleware!');
});

server.get('/about', (req, res) => {
  res.send(`I'm going to become a JS Developer in ${new Date().getFullYear()}!`);
});

export { server };