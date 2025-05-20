import { Gender } from '@/shared/enums';
import { z } from 'zod';

export const userSchema = z.object({
  full_name: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email'),
  age: z.number().int().positive('Age must be a positive number'),
  gender: z.nativeEnum(Gender),
  image_url: z.string().url('Invalid image URL').optional().nullable(),
  hash_pass: z.string().min(6, 'Password must be at least 6 characters'),
  phone_number: z.string().min(8).optional().nullable(),
  dob: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date format for DOB',
  }),
  post_code: z.string().min(1, 'Post code is required'),
});

export type UserFormValues = z.infer<typeof userSchema>;
