export const enum Genres {
  Action = 'боевик',
  Fantasy = 'фэнтези',
  ScienceFiction = 'фантастика',
  Thriller = 'триллер',
  War = 'военный',
  Detective = 'детектив',
  Comedy = 'комедия',
  Drama = 'драма',
  Horror = 'ужасы',
  Crime = 'криминал',
  Romance = 'мелодрама',
  Western = 'вестерн',
  Biography = 'биография',
  Anime = 'аниме',
  Kids = 'детский',
  Animation = 'мультфильм',
  FilmNoir = 'фильм-нуар',
  Adult = 'для взрослых',
  Documentary = 'документальный',
  History = 'история',
  Concert = 'концерт',
  Short = 'короткометражка',
  Music = 'музыка',
  Musical = 'мюзикл',
  News = 'новости',
  Adventure = 'приключения',
  RealityTV = 'реальное ТВ',
  Family = 'семейный',
  Sports = 'спорт',
  TalkShow = 'ток-шоу',
  Ceremony = 'церемония',
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
  year: number;
  rating: number;
  length: number;
}

export interface IProfileCard {
  avatarUrl: string;
  name: string;
  email: string;
}
