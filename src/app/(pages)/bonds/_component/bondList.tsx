'use client';

import { Button } from '@/components/atoms/button';
import { Card, CardContent } from '@/components/atoms/card';
import { useBonds, useDeleteBond } from '@/queries/useBonds';
import { IBond } from '@/shared/interfaces/bond';

export default function BondsList() {
  const { data: bonds, isLoading } = useBonds();
  const deleteBond = useDeleteBond();

  if (isLoading) return <p>Loading bonds...</p>;

  if (!bonds || bonds.length === 0) return <p>No bonds found.</p>;

  return (
    <ul className="space-y-2">
      {bonds.map((bond: IBond) => (
        <Card key={bond.id} className="flex justify-between items-center p-4">
          <CardContent>
            <span>
              {bond.name} - {bond.price}
            </span>
          </CardContent>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => deleteBond.mutate(bond.id)}
          >
            Delete
          </Button>
        </Card>
      ))}
    </ul>
  );
}
