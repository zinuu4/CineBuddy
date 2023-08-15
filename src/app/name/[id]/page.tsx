import { Person } from '@/page-s/person';

interface IPersonPageProps {
  params: {
    id: string;
  };
}

export default function PersonPage({ params: { id } }: IPersonPageProps) {
  return (
    <main className="pageContainer">
      <Person id={id} />
    </main>
  );
}
