import { ExceptionFactory } from '@factories/ExceptionFactory';
import { Request, Response, NextFunction } from 'express';

const notFoundMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  next(ExceptionFactory.newException('notFoundException'));
};

export { notFoundMiddleware };
