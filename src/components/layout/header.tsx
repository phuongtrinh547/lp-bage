'use client';

import { AUTH_STATUS, HEADER_TABS, ROUTES } from '@/shared/constants';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../atoms/button';

export default function Header() {
  const pathname = usePathname();
  const { status } = useSession();
  console.log(status);

  const isLoggedIn = status === AUTH_STATUS.AUTHENTICATED;

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
        <div className="flex gap-2">
          {!isLoggedIn && (
            <>
              <Link href={ROUTES.LOGIN}>Login</Link>
              <Link href={ROUTES.REGISTER}>Register</Link>
            </>
          )}
          {isLoggedIn && <Button onClick={() => signOut()}>Logout</Button>}
        </div>
      </div>
    </header>
  );
}
