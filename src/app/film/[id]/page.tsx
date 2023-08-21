import { Metadata } from 'next';

import { Movie } from '@/page-s/movie';

interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: IProps): Promise<Metadata> {
  const response = await fetch(`${process.env.BASE_URL}/v1.3/movie/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.API_KEY ?? '',
    },
  });

  const data = await response.json();
  const title = `${data?.name} (${data?.year}) смотреть онлайн бесплатно в хорошем HD 1080 / 720 качестве`;
  const description = data?.description ?? data?.shortDescription;

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: data?.poster?.url,
          alt: data?.name,
        },
      ],
    },
  };
}

export default function MoviePage({ params: { id } }: IProps) {
  return (
    <main className="pageContainer">
      <Movie id={id} />
    </main>
  );
}
