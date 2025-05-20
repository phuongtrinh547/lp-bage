// app/not-found.tsx
'use client';

import { Button } from '@/components/atoms/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Trang bạn đang tìm không tồn tại.
      </p>
      <Button asChild>
        <Link href="/">Quay về trang chủ</Link>
      </Button>
    </div>
  );
}
