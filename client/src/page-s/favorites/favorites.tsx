import { ProfileMoviesList } from '@/widgets/profile-movies-list';
import { collections } from '@/shared/lib';

export default function Favorites() {
  return <ProfileMoviesList collection={collections.saved} />;
}
