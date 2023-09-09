export type FilterType = 'rate' | 'genre' | 'release' | 'sort';

export interface Option {
  label: string;
  value: string;
}

export interface IFilters {
  label: string;
  name: FilterType;
  options: Option[];
}

export interface IMoviesDrawerProps {
  filter: IFilters;
  name: string;
  onChange?: (value: string) => void;
}
