import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EducationModule } from "./education/education.module";
import { getConnectionOptions } from "typeorm";
import ormConfig = require('./config/typeorm.config');

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: "../.env",
      expandVariables: true,
      ignoreEnvFile: process.env.NODE_ENV === "production"
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), ormConfig[0])
    }),
    EducationModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
