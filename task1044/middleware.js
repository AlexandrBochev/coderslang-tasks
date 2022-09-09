import { getFormattedDate } from './functions'

export const logRequestTimestamp = (req, res, next) => {
  console.log(getFormattedDate());
  next();
}

export const logger = (req, res, next) => {
  return (req, res, next) => {
    next();
  }
    
}