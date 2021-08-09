import { join } from 'path';
import {TypeOrmModuleOptions} from "@nestjs/typeorm";
import * as dotenv from 'dotenv';

dotenv.config();

export = [
  {
    url: process.env.DATABASE_URL,
    type: "postgres",
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    ssl:
        process.env.NODE_ENV === "production"
            ? {
              rejectUnauthorized: false
            }
            : false,
    synchronize: (process.env.NODE_ENV === "development"),
    entities: [
      join(__dirname, '..', '/**/*.entity{.ts,.js}'),
    ],
    migrations: [
      "migration/*{.ts,.js}"
    ],
    cli: {
      migrationsDir: "migration"
    }
  } as TypeOrmModuleOptions
];