import { ProfileMoviesList } from '@/widgets/profile-movies-list';
import { collections } from '@/shared/lib/firebase-collections';

export default function Favorites() {
  return <ProfileMoviesList collection={collections.saved} />;
}
