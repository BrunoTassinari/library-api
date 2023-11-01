class BaseException extends Error {
  constructor(message: string = 'An error occurred') {
    super(message);
  }

  public getErrorMessage(): string {
    return this.message;
  }
}