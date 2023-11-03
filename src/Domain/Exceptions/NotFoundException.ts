import { BaseException } from './BaseException';

class NotFoundException extends BaseException {
  constructor(message: string = 'Not found', status: number = 404) {
    super(message, status);
  }
}

export { NotFoundException };
