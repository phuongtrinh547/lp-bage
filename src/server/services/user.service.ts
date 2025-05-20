import { getDataSource } from '../config/data-source';
import { User } from '../entities/User';

export async function getAllUser() {
  const ds = await getDataSource();
  const repo = ds.getRepository(User);

  return await repo.find();
}

export async function register(data: Partial<User>) {
  const ds = await getDataSource();
  const repo = ds.getRepository(User);

  const newUser = repo.create(data);
  await repo.save(newUser);

  return newUser;
}

export async function deleteUser(id: string) {
  const ds = await getDataSource();
  const repo = ds.getRepository(User);
  const user = await repo.findOneBy({ id });
  if (!user) throw new Error('User not found');
  await repo.remove(user);
  return { message: 'User deleted' };
}

export async function updateInformation(data: User) {
  const ds = await getDataSource();
  const repo = ds.getRepository(User);
  const user = await repo.findOneBy({ id: data.id });
  if (!user) throw new Error('user not found');

  Object.assign(user, data);
  return await repo.save(user);
}
