import { ProfileMoviesList } from '@/widgets/profile-movies-list';
import { collections } from '@/shared/lib';

export default function History() {
  return <ProfileMoviesList collection={collections.history} />;
}
