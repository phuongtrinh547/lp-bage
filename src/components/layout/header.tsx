// /components/layout/Header.tsx
'use client';

import { HEADER_TABS } from '@/shared/constants/navigation';
import { ROUTES } from '@/shared/constants/routes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-primary text-primary-foreground p-4">
      <div className="flex space-x-4 justify-between">
        <div className="flex space-x-4">
          {HEADER_TABS.map((tab) => (
            <Link
              key={tab.path}
              href={tab.path}
              className={`px-3 py-1 rounded ${
                pathname === tab.path ? 'bg-white text-primary' : ''
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
        <div className="">
          <Link href={ROUTES.SIGN_IN}>Sign in</Link>
        </div>
      </div>
    </header>
  );
}
