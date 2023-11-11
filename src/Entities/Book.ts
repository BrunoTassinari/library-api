export class Book {
  public readonly id: string = '';

  public readonly author_id: string = '';

  public title: string = '';

  public price: number = 0;

  public pages: number = 0;

  public description: string = '';

  public release_date: Date = new Date();

  constructor(props: Book) {
    Object.assign(this, props);
  }
}
