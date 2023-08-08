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

export interface ExternalId {
  /**
   * ID из kinopoisk HD
   * @example "48e8d0acb0f62d8585101798eaeceec5"
   */
  kpHD?: string | null;
  /** @example "tt0232500" */
  imdb?: string | null;
  /** @example 9799 */
  tmdb?: number | null;
}

export interface Name {
  name?: string;
  language?: string | null;
  type?: string | null;
}

export interface Rating {
  /**
   * Рейтинг кинопоиска
   * @example 6.2
   */
  kp?: number | null;
  /**
   * Рейтинг IMDB
   * @example 8.4
   */
  imdb?: number | null;
  /**
   * Рейтинг TMDB
   * @example 3.2
   */
  tmdb?: number | null;
  /**
   * Рейтинг кинокритиков
   * @example 10
   */
  filmCritics?: number | null;
  /**
   * Рейтинг кинокритиков из РФ
   * @example 5.1
   */
  russianFilmCritics?: number | null;
  /**
   * Рейтинг основанный на ожиданиях пользователей
   * @example 6.1
   */
  await?: number | null;
}

export interface Votes {
  /** @example 60000 */
  kp?: string | null;
  /** @example 50000 */
  imdb?: string | null;
  /** @example 10000 */
  tmdb?: number | null;
  /**
   * Количество голосов кинокритиков
   * @example 10000
   */
  filmCritics?: number | null;
  /**
   * Количество голосов кинокритиков из РФ
   * @example 4000
   */
  russianFilmCritics?: number | null;
  /**
   * Количество ожидающих выхода
   * @example 34000
   */
  await?: number | null;
}

export interface Logo {
  /** Чтобы найти фильмы с этим полем, используйте: `!null` */
  url?: string | null;
}

export interface ShortImage {
  /** Чтобы найти фильмы с этим полем, используйте: `!null` */
  url?: string | null;
  /** Чтобы найти фильмы с этим полем, используйте: `!null` */
  previewUrl?: string | null;
}

export interface Video {
  /**
   * Url трейлера
   * @example "https://www.youtube.com/embed/ZsJz2TJAPjw"
   */
  url?: string | null;
  /** @example "Official Trailer" */
  name?: string | null;
  /** @example "youtube" */
  site?: string | null;
  /** @example "TRAILER" */
  type?: string | null;
  size: number;
}

export interface VideoTypes {
  trailers?: Video[];
  teasers: Video[];
}

export interface ItemName {
  name?: string;
}

export interface PersonInMovie {
  /**
   * Id персоны с кинопоиска
   * @example 6317
   */
  id?: number | null;
  /** @example "https://st.kp.yandex.net/images/actor_iphone/iphone360_6317.jpg" */
  photo?: string | null;
  /** @example "Пол Уокер" */
  name?: string | null;
  /** @example "Paul Walker" */
  enName?: string | null;
  description: string;
  profession: string;
  enProfession: string;
}

export interface ReviewInfo {
  count?: number | null;
  positiveCount?: number | null;
  percentage?: string | null;
}

export interface SeasonInfo {
  number?: number | null;
  episodesCount?: number | null;
}

export interface CurrencyValue {
  /**
   * Сумма
   * @example 207283
   */
  value?: number | null;
  /**
   * Валюта
   * @example "€"
   */
  currency?: string | null;
}

export interface Fees {
  world?: CurrencyValue;
  russia?: CurrencyValue;
  usa?: CurrencyValue;
}

export interface Premiere {
  /** @example "США" */
  country?: string | null;
  /**
   * Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023
   * @format date-time
   * @example "2023-02-25T02:44:39.359Z"
   */
  world?: string | null;
  /**
   * Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023
   * @format date-time
   * @example "2023-02-25T02:44:39.359Z"
   */
  russia?: string | null;
  digital?: string | null;
  /**
   * Для более релевантного поиска, используйте интервал дат 01.02.2022-01.02.2023
   * @format date-time
   * @example "2023-02-25T02:44:39.359Z"
   */
  cinema?: string | null;
  bluray: string;
  dvd: string;
}

export interface LinkedMovie {
  id?: number | null;
  name: string;
  enName: string;
  alternativeName: string;
  type?: string;
  poster: ShortImage;
}

export interface WatchabilityItem {
  name?: string | null;
  logo: Logo;
  url: string;
}

export interface Watchability {
  items?: WatchabilityItem[];
}

export interface YearRange {
  /**
   * Год начала
   * @example 2022
   */
  start?: number | null;
  /**
   * Год окончания
   * @example 2023
   */
  end?: number | null;
}

export interface Audience {
  /**
   * Количество просмотров в кино
   * @example 1000
   */
  count: number;
  /**
   * Страна в которой проходил показ
   * @example "Россия"
   */
  country: string;
}

export interface FactInMovie {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface Images {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

export interface VendorImage {
  name?: string | null;
  url?: string | null;
  previewUrl?: string | null;
}

export interface RawMovieItem {
  id: number;
  type: string;
  externalId: ExternalId;
  name: string;
  rating: Rating;
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
  docs: RawMovieItem[] | null;
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface IMovieCard {
  img: string;
  name: string;
  year: number;
  rating: string | number;
  length: number;
}

export interface IProfileCard {
  avatarUrl: string;
  name: string;
  email: string;
}

export interface IMovie {
  /**
   * Id фильма с кинопоиска
   * @example 666
   */
  id: number;
  externalId: ExternalId;
  /** @example "Человек паук" */
  name?: string | null;
  /** @example "Spider man" */
  alternativeName?: string | null;
  /** @example "Spider man" */
  enName?: string | null;
  names: Name[];
  /**
   * Тип тайтла. Доступны: movie | tv-series | cartoon | anime | animated-series | tv-show
   * @example "movie"
   */
  type: string;
  /**
   * Тип тайтла в числовом обозначении. Доступны: 1 (movie) | 2 (tv-series) | 3 (cartoon) | 4 (anime) | 5 (animated-series) | 6 (tv-show)
   * @example 1
   */
  typeNumber: number;
  /**
   * Год премьеры. При поиске по этому полю, можно использовать интервалы 1860-2030
   * @example 2023
   */
  year?: number | null;
  /** Описание тайтла */
  description?: string | null;
  /** Сокращенное описание */
  shortDescription?: string | null;
  /** Слоган */
  slogan?: string | null;
  /**
   * Статус релиза тайтла. Доступные значения: filming | pre-production | completed | announced | post-production
   * @example "completed"
   */
  status?: string | null;
  rating?: Rating;
  votes?: Votes;
  /**
   * Продолжительность фильма
   * @example 120
   */
  movieLength?: number | null;
  /**
   * Возрастной рейтинг по MPAA
   * @example "pg13"
   */
  ratingMpaa?: string | null;
  /**
   * Возрастной рейтинг
   * @example "16"
   */
  ageRating?: number | null;
  logo?: Logo;
  poster?: ShortImage;
  backdrop?: ShortImage;
  videos?: VideoTypes;
  genres?: ItemName[];
  countries?: ItemName[];
  persons?: PersonInMovie[];
  reviewInfo?: ReviewInfo;
  seasonsInfo?: SeasonInfo[];
  budget?: CurrencyValue;
  fees?: Fees;
  premiere?: Premiere;
  similarMovies?: LinkedMovie[];
  sequelsAndPrequels?: LinkedMovie[];
  watchability?: Watchability;
  releaseYears?: YearRange[];
  /**
   * Позиция тайтла в топ 10. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`
   * @example 1
   */
  top10?: number | null;
  /**
   * Позиция тайтла в топ 250. Чтобы найти фильмы участвующие в рейтинге используйте: `!null`
   * @example 200
   */
  top250?: number | null;
  /**
   * Признак того, что тайтл находится в прокате
   * @example true
   */
  ticketsOnSale?: boolean | null;
  /**
   * Продолжительность всех серий
   * @example 155
   */
  totalSeriesLength?: number | null;
  /**
   * Средняя продолжительность серии
   * @example 20
   */
  seriesLength?: number | null;
  /**
   * Признак сериала
   * @example true
   */
  isSeries: boolean;
  audience?: Audience[] | null;
  facts: FactInMovie[];
  imagesInfo: Images;
  productionCompanies: VendorImage[];
}
