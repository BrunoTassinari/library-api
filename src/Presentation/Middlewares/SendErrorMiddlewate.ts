import { NextFunction, Request, Response } from "express";
import { BaseException } from "Domain/Exceptions/BaseException";
import { ExceptionFactory } from "@factories/ExceptionFactory";

const SendErrorMiddleware = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.error(error);

  if(error instanceof BaseException) {
    error.sendError(res);
  }

  ExceptionFactory.createException('baseException').sendError(res);
};

export { SendErrorMiddleware };
