import { z } from 'zod';

export const bondSchema = z.object({
  name: z.string().min(1),
  price: z.number().positive(),
  maturityDate: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: 'Invalid date',
  }),
  couponRate: z.number().min(0),
  issuer: z.string().min(1),
});

export type BondFormValues = z.infer<typeof bondSchema>;
