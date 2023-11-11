export interface CreateBookDTO {
  author_id: string;
  title: string;
  pages: number;
  price: number;
  description: string;
  release_date: Date;
}
