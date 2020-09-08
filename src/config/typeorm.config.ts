import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'lallah.db.elephantsql.com',
  port: 5432,
  username: 'gtrapemj',
  password: 'v6GNwXe0TJlfQ6tH70R9TcWd3CtFU7Xa',
  database: 'gtrapemj',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

// export const typeOrmConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'root',
//   database: 'taskmanagement',
//   entities: [__dirname + '/../**/*.entity.{js,ts}'],
//   synchronize: true,
// };
