import { Response } from 'express';

class BaseException extends Error {
  public message: string;

  public status: number;

  constructor(message: string = 'An error occurred', status: number = 500) {
    super();

    this.message = message;
    this.status = status;
  }

  sendError(res: Response): void {
    res.status(this.status).json({
      status: this.status,
      message: this.message,
    });
  }
}

export { BaseException };
