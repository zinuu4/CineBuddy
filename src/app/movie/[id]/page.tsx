import Movie from '@/pages/movie/movie';

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
