import { api } from '@/lib/api-client';
import { BondFormValues } from '@/shared/schemas/bondSchema';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useBonds = () => {
  return useQuery({
    queryKey: ['bonds'],
    staleTime: 1000 * 60 * 5,
    queryFn: async () => {
      const { data } = await api.get('/bonds');
      return data;
    },
  });
};

export const useCreateBond = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (newBond: BondFormValues) => {
      const { data } = await api.post('/bonds', newBond);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bonds'] });
    },
  });
};

export const useUpdateBond = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      updates,
    }: {
      id: string;
      updates: { name?: string; value?: number };
    }) => {
      const { data } = await api.put(`/bonds/${id}`, updates);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bonds'] });
    },
  });
};

export const useDeleteBond = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`/bonds/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bonds'] });
    },
  });
};
