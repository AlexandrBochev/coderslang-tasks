import express from 'express';
import { config } from './constants.js'

const server = express();

server.get('/config', (req, res) => {
  return res.json(config);
})

export { server };