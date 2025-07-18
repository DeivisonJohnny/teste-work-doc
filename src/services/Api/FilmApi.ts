import Api from ".";

export type Rating = {
  id: string;
  source: string;
  value: string;
  filmeId: string;
};

export type Film = {
  id: string;
  title: string;
  year: string;
  rated: string;
  released: string;
  runtime: string;
  genre: string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  awards: string;
  poster: string;
  metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  type: string;
  DVD: string;
  boxOffice: string;
  production: string;
  website: string;
  ratings: Rating[];
};

interface PaginatedResponse<T> {
  data: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export default class FilmApi {
  static async listPosterWithPagination({
    page = 1,
    limit = 8,
    search = "",
  }): Promise<PaginatedResponse<Film>> {
    return Api.get(`/film-poster?page=${page}&limit=${limit}&search=${search}`);
  }

  static async getById(id: string): Promise<Film> {
    return Api.get(`/film?id=${id}`);
  }
}
