import { NotFoundException } from 'Domain/Exceptions/NotFoundException';
import { BaseException } from '../../Domain/Exceptions/BaseException';

class ExceptionFactory {
  public static newException(type: string = ''): BaseException {
    switch (type) {
      case 'notFoundException':
        return new NotFoundException();
      default:
        return new BaseException();
    }
  }

  public static newCustomException(
    message: string,
    status: number,
    type: string = '',
  ): BaseException {
    switch (type) {
      case 'notFoundException':
        return new NotFoundException(message, status);
      default:
        return new BaseException(message, status);
    }
  }
}

export { ExceptionFactory };
