'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/auth/signin'); // chuyển sang trang đăng nhập sau khi đăng ký thành công
    } else {
      const data = await res.json();
      setError(data.message || 'Something went wrong');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Sign Up</h1>

      {error && <p className="text-red-500">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full"
        required
      />

      <button
        type="submit"
        className="bg-green-600 text-white p-2 w-full rounded"
      >
        Register
      </button>
    </form>
  );
}
