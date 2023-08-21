import { Metadata } from 'next';

import { Person } from '@/page-s/person';

interface IProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params: { id },
}: IProps): Promise<Metadata> {
  const response = await fetch(`${process.env.BASE_URL}/v1/person/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': process.env.API_KEY ?? '',
    },
  });

  const data = await response.json();
  const title = data?.name;
  const description = data?.description ?? data?.shortDescription;

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: data?.photo,
          alt: data?.name,
        },
      ],
    },
  };
}

export default function PersonPage({ params: { id } }: IProps) {
  return (
    <main className="pageContainer">
      <Person id={id} />
    </main>
  );
}
