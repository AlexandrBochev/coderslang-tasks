import express from 'express';
import { logRequestType } from './middleware'

const server = express();
server.use(logRequestType);

server.get('/', (req, res, next) => {
  res.send('Learning to use middleware!');
});



export { server };