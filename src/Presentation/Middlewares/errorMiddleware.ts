import { NextFunction, Request, Response } from 'express';
import { BaseException } from 'Domain/Exceptions/BaseException';
import { ExceptionFactory } from '@factories/ExceptionFactory';

const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction, // eslint-disable-line @typescript-eslint/no-unused-vars
) => {
  console.error(error);

  if (error instanceof BaseException) {
    error.sendError(res);
  }

  ExceptionFactory.newException().sendError(res);
};

export { errorMiddleware };
