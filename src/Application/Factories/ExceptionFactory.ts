import { NotFoundException } from "Domain/Exceptions/NotFoundException";
import { BaseException } from "../../Domain/Exceptions/BaseException";

class ExceptionFactory {
  public static createException(type: string): BaseException{
    switch(type) {
      case "notFoundException":
        return new NotFoundException();
      case "baseException":
        return new BaseException();
      default:
        return new BaseException();
    }
  };

  static createCustomException(type: string, message: string): BaseException {
    switch(type) {
      case "notFoundException":
        return new NotFoundException(message);
      case "baseException":
        return new BaseException(message);
      default:
        return new BaseException(message);
    }
  }

  public static trowException(type: string, message: string): void {
    throw this.createCustomException(type, message);
  }
}

export { ExceptionFactory };