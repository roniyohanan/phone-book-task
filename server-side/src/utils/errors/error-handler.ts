import * as express from 'express';
import { ValidationError } from 'joi';
import { ApplicationError } from './errors';

export const errorMiddleware = (error: Error, _req: express.Request, res: express.Response, next: express.NextFunction): void => {
  if (error instanceof ValidationError) {
    res.status(400).send({
      type: error.name,
      message: error.message,
    });
  } else if (error instanceof ApplicationError) {
    res.status(error.status).send({
      type: error.name,
      message: error.message,
    });
  } else {
    res.status(500).send({
      type: error.name,
      message: error.message,
    });
  }

  next();
};
