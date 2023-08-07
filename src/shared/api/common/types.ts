export enum Genres {
  Thriller = 'триллер',
  Horror = 'ужасы',
  Adventure = 'приключения',
  Action = 'Боевик',
  Fantasy = 'фантастика',
  ScienceFiction = 'научная фантастика',
  Comedy = 'комедия',
  Drama = 'драма',
  Melodrama = 'мелодрама',
  Family = 'семейный',
  Adult = 'для взрослых',
}

export interface RawMovieItem {
  id: number;
  type: string;
  externalId: {
    kpHD: string;
    imdb: string;
    tmdb: number;
  };
  name: string;
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
  };
  description: string;
  votes: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
  };
  year: number;
  poster: {
    url: string;
    previewUrl: string;
  };
  genres: {
    name: Genres;
  }[];
  countries: {
    name: string;
  }[];
  alternativeName: string;
  enName: string | null;
  movieLength: number;
  names: {
    name: string;
    language: string;
    type: string | null;
  }[];
  shortDescription: string;
  logo: {
    url: string;
  };
}

export interface RawMovieItems {
  docs: RawMovieItem[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IMovieCard {
  img: string;
  name: string;
  year: string | number;
  rating: string | number;
  length: string | number;
}
