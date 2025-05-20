import { getDataSource } from '../config/data-source';
import { Bond } from '../entities/Bond';

export async function getAllBonds() {
  const ds = await getDataSource();
  const repo = ds.getRepository(Bond);
  return repo.find();
}

export async function addBond(data: Partial<Bond>) {
  const ds = await getDataSource();
  const repo = ds.getRepository(Bond);

  const newBond = repo.create(data);
  return repo.save(newBond);
}

export async function deleteBond(id: string) {
  const ds = await getDataSource();
  const repo = ds.getRepository(Bond);

  const result = await repo.delete(id);
  if (result.affected === 0) throw new Error('Bond not found');

  return { message: 'Bond deleted' };
}

export async function updateBond(data: Partial<Bond> & { id: string }) {
  const ds = await getDataSource();
  const repo = ds.getRepository(Bond);

  const bond = await repo.findOneBy({ id: data.id });
  if (!bond) throw new Error('Bond not found');

  Object.assign(bond, data);
  return repo.save(bond);
}
