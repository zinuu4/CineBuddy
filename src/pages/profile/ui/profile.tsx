import classNames from 'classnames';
import { Sidebar } from '@/widgets/sidebar';
import { ProfileForm } from '@/features/profile-form';
import { profileConfig } from '@/shared/lib/consts/nav';

import styles from './style.module.scss';

const profile = {
  name: 'Josh',
  surname: 'Smith',
  email: 'josh@gmail.com',
  avatarUrl: '/avatar.svg',
};

export default function Profile() {
  return (
    <div className={classNames('container', styles.container)}>
      <Sidebar items={profileConfig.sidebarItems} />
      <ProfileForm data={profile} />
    </div>
  );
}
