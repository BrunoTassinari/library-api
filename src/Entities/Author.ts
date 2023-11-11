export class Author {
  public readonly id: string = '';

  public name: string = '';

  public nationality: string = '';

  public readonly books_published: number = 0;

  constructor(props: Author) {
    Object.assign(this, props);
  }
}
