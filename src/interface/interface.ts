export interface IApi {
  Search: Search[];
  totalResults: string;
  Response: string;
}

interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}