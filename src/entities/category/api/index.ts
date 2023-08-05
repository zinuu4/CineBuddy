import { AxiosError } from 'axios';

import { $api } from '@/shared/api';
import { LIMIT } from '@/shared/lib/consts';

import { RawMovieItems, MovieCard } from '@/app/types/types';
import { Genres } from '../model/types';

interface CategoriesApiProps {
  genre?: Genres,
  year?: number,
  sort?: string
  sortField?: string
  limit?: number
}

export const categoriesApi = () => {
  const getMovies = async (props: CategoriesApiProps) => {
    try {
      const response = await $api.get<RawMovieItems>('/v1.3/movie', {
        params: {
          'genres.name': props.genre,
          'poster.previewUrl': '!null',
          name: '!null',
          year: props.year,
          sortField: props.sortField ?? 'votes.imdb',
          sortType: props.sort ?? '-1',
          limit: props.limit ?? LIMIT,
        }
      });

      const movies: MovieCard[] = response.data.docs.map((movie) => ({
        name: movie.name,
        img: movie.poster.previewUrl,
        length: movie.movieLength,
        rating: movie.rating.imdb,
        year: movie.year
      }))

      return { 
        movies,
        error: null
      };
    } catch (error) {
      if (error instanceof AxiosError) return { error: error.message, movies: [] }

      return { error: 'Something went wrong', movies: [] }
    }
  }

  return {
    getMovies,
  }
}