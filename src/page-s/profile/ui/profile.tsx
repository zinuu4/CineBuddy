import { getServerSession } from 'next-auth';

import { ProfileForm } from '@/features/profile-form';

export const Profile = async () => {
  const session = await getServerSession();

  return (
    <ProfileForm
      name={session?.user?.name ?? ''}
      email={session?.user?.email ?? ''}
      photo={session?.user?.image ?? ''}
    />
  );
};
