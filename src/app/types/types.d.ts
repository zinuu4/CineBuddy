import { Genres } from '@/entities/category/model/types'

interface RawMovieItem {
  id: number,
  type: string,
  externalId: {
    kpHD: string,
    imdb: string,
    tmdb: number
  },
  name: string,
  rating: {
    kp: number,
    imdb: number,
    filmCritics: number,
    russianFilmCritics: number,
  },
  description: string,
  votes: {
    kp: number,
    imdb: number,
    filmCritics: number,
    russianFilmCritics: number,
  },
  year: number,
  poster: {
    url: string
    previewUrl: string
  },
  genres: {
    name: Genres
  }[],
  countries: {
    name: string
  }[],
  alternativeName: name,
  enName: string | null,
  movieLength: number,
  names: {
    name: string,
    language: string,
    type: string | null
  }[],
  shortDescription: string,
  logo: {
    url: string
  },
}

interface RawMovieItems {
  docs: RawMovieItem[]
  total: number,
  limit: number,
  page: number,
  pages: number
}

interface MovieCard {
  img: string;
  name: string;
  year: string | number;
  rating: string | number;
  length: string | number;
}
