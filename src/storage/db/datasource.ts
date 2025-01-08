import {DataSource} from 'typeorm';
import {typeORMDriver} from 'react-native-quick-sqlite';
import {Photo} from '~/storage/db/entities/Photo';

export const AppDataSource = new DataSource({
  type: 'react-native',
  database: 'app1_db',
  driver: typeORMDriver,
  location: 'default',
  //dropSchema: true,
  // synchronize: true,
  maxQueryExecutionTime: 2000,
  logging: 'all',
  migrations: [],
  migrationsRun: true,
  entities: [Photo],
});
