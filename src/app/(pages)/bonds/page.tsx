// src/app/bonds/page.tsx

import BondForm from './_component/bondForm';
import BondsList from './_component/bondList';

export default function BondsPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold mb-4">Create a New Bond</h1>
      <BondForm />
      <hr className="my-8" />
      <BondsList />
    </div>
  );
}
