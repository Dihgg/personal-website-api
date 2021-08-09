import { Module } from "@nestjs/common";
import { EducationService } from "./services";
import { EducationController } from "./controllers";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Education } from "./entities";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Education
    ])
  ],
  controllers: [EducationController],
  providers: [EducationService]
})
export class EducationModule {
}
