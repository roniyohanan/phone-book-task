import { Response, Request, NextFunction } from 'express';

export const wrapValidator = (func: (req: Request) => Promise<void>) => (req: Request, _res: Response, next: NextFunction): void => {
  func(req).then(() => next()).catch(next);
};

export const wrapAsync = (func: (req: Request, res: Response, next: NextFunction) => Promise<void>) => (req: Request, res: Response, next: NextFunction): void => {
  func(req, res, next).catch(next);
};
