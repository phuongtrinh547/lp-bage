import { getDataSource } from '@/server/config/data-source';
import { User } from '@/server/entities/User';
import { ILogin } from '@/shared/interfaces/user';
import { compare } from 'bcrypt';

export async function authorizeUser(credentials: ILogin) {
  console.log('ancd');

  const ds = await getDataSource();
  const repo = ds.getRepository(User);

  const user = await repo.findOneBy({ email: credentials.email });

  if (!user) return null;

  const isValid = await compare(credentials.password, user.hash_pass);
  if (!isValid) return null;

  return {
    id: user.id,
    email: user.email,
  };
}
