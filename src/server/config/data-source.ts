import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Bond } from '../entities/Bond';
import { User } from '../entities/User';
import env from '../lib/env';

let dataSource: DataSource;

export const getDataSource = async () => {
  if (!dataSource) {
    dataSource = new DataSource({
      type: 'postgres',
      url: env.DATABASE_URL,
      entities: [Bond, User],
      synchronize: false,
    });

    if (!dataSource.isInitialized) {
      await dataSource.initialize();
    }
  }
  return dataSource;
};

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: env.DATABASE_URL,
  entities: [Bond, User],
  migrations: ['src/server/migrations/*.ts'],
  synchronize: false,
  logging: true,
});
