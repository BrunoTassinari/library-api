export interface CreateBookDTO {
  authorId: string;
  name: string;
  pages: number;
  price: number;
  description: string;
  releaseDate: Date;
}
