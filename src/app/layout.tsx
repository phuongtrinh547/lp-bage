import QueryProvider from '@/lib/QueryProvider';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP } from 'next/font/google';
import { siteConfig } from './config/site';

const inter = Inter({ subsets: ['latin'] });

const NotoSansFont = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.className}`}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          NotoSansFont.className,
        )}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
