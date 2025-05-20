import bcrypt from 'bcrypt';
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

  let hash_pass = '';
  if (data.hash_pass) {
    const saltRounds = 10;
    hash_pass = await bcrypt.hash(data.hash_pass, saltRounds);
  }

  const newUser = repo.create({
    ...data,
    hash_pass,
  });
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

export async function findUserByEmail(email: string): Promise<User | null> {
  const ds = await getDataSource();
  const repo = ds.getRepository(User);
  const user = await repo.findOneBy({ email });
  return user ?? null;
}

export async function verifyPassword(
  inputPassword: string,
  storedHash: string,
): Promise<boolean> {
  return bcrypt.compare(inputPassword, storedHash);
}
