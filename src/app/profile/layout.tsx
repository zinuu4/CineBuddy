import React from 'react';
import { Sidebar } from '@/widgets/sidebar';

import { profileConfig } from '@/shared/lib/consts';

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex-1-expand">
      <div className="sidebar-wrapper">
        <Sidebar items={profileConfig.sidebarItems} />
        {children}
      </div>
    </div>
  );
}
