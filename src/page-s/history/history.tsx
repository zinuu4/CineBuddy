import { ProfileMoviesList } from '@/widgets/profile-movies-list';
import { collections } from '@/shared/lib/firebase-collections';

export default function History() {
  return <ProfileMoviesList collection={collections.history} />;
}
