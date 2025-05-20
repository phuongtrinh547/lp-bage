import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL'),
});

const _env = {
  DATABASE_URL: process.env.DATABASE_URL,
};

const parsed = envSchema.safeParse(_env);

if (!parsed.success) {
  console.error(
    '❌ Invalid environment variables:',
    parsed.error.flatten().fieldErrors,
  );
  throw new Error('Invalid environment variables');
}

const env = parsed.data;

export default env;
