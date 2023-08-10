import Movie from '@/page-s/movie/movie';

interface IMoviePageProps {
  params: {
    id: string;
  };
}

export default function MoviePage({ params: { id } }: IMoviePageProps) {
  return (
    <main>
      <Movie id={id} />
    </main>
  );
}
