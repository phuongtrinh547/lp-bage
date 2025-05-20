'use client';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { ReactNode, useState } from 'react';
import { Toaster } from 'sonner';

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => new QueryClient());

  return (
    <SessionProvider>
      <Toaster position="top-center" richColors />
      <Header />
      <QueryClientProvider client={client}>{children}</QueryClientProvider>;
      <Footer />
    </SessionProvider>
  );
}
