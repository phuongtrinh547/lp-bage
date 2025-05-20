import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

// Đây giả sử bạn có hàm check user, ví dụ truy vấn DB
type Credentials = { email: string; password: string };

async function authorizeUser(credentials: Credentials) {
  const { email, password } = credentials;
  // Thay bằng logic thực tế của bạn, ví dụ:
  if (email === 'user@example.com' && password === 'password123') {
    return { id: '1', name: 'John Doe', email };
  }
  return null;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'email@example.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const user = await authorizeUser(credentials as Credentials);
        if (user) {
          return user; // trả về user để tạo session
        }
        return null; // đăng nhập thất bại
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin', // Trang đăng nhập custom (tùy chọn)
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as typeof session.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});
