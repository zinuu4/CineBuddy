import { ProfileCard } from '@/entities/profile/ui/profile-card';

const profile = {
  name: 'Josh',
  email: 'josh@gmail.com',
  avatarUrl: '/avatar.svg',
};

export const Profile = () => <ProfileCard data={profile} />;
