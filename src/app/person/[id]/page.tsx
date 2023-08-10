import { Person } from '@/page-s/person';

interface IPersonPageProps {
  params: {
    id: string;
  };
}

export default function PersonPage({ params: { id } }: IPersonPageProps) {
  return (
    <main>
      <Person id={id} />
    </main>
  );
}
