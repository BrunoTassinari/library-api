export class Book {
  public readonly id: string = '';

  public readonly authorId: string = '';

  public name: string = '';

  public pages: number = 0;

  public description: string = '';

  public releaseDate: Date = new Date();

  constructor(props: Book) {
    Object.assign(this, props);
  }
}
