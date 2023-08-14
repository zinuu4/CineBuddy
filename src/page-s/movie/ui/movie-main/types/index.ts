import { IPersonInMovie, IVideo } from '@/shared/api';

export interface IMovieMainProps {
  backdrop: string;
  logo: string;
  rating: number;
  year: number;
  genre: string;
  ageRestriction: number;
  country: string;
  length: number;
  shortDescription: string;
  persons: IPersonInMovie[];
  trailers: IVideo[];
  id: number;
  name: string;
  isSeries: boolean;
  seasons?: number;
}
