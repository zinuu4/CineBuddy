import { ProfileForm } from '@/features/profile-form';

const profile = {
  name: 'Josh',
  surname: 'Smith',
  email: 'josh@gmail.com',
  avatarUrl: '/avatar.svg',
};

export const Profile = () => <ProfileForm data={profile} />;
