'use client';

import { Button } from '@/components/atoms/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/atoms/form';
import { Input } from '@/components/atoms/input';
import { useCreateBond } from '@/queries/useBonds';
import { BondFormValues, bondSchema } from '@/shared/schemas/bondSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

export default function BondForm() {
  const form = useForm<BondFormValues>({
    resolver: zodResolver(bondSchema),
    defaultValues: {
      name: '',
      price: 0,
      maturityDate: '',
      couponRate: 0,
      issuer: '',
    },
  });

  const createBond = useCreateBond();

  const onSubmit = (values: BondFormValues) => {
    createBond.mutate(values);
    form.reset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-md"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tên trái phiếu</FormLabel>
              <FormControl>
                <Input placeholder="VD: Trái phiếu ABC" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Giá</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  value={field.value}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="maturityDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ngày đáo hạn</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="couponRate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Lãi suất</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  value={field.value}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="issuer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tổ chức phát hành</FormLabel>
              <FormControl>
                <Input placeholder="VD: Công ty XYZ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Tạo trái phiếu
        </Button>
      </form>
    </Form>
  );
}
