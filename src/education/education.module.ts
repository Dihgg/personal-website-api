import { Module } from "@nestjs/common";
import { EducationService } from "./services";
import { EducationController } from "./controllers";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Education } from "./entities";
import { MetamorphosisModule } from "@fabio.formosa/metamorphosis-nest";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Education
    ]),
    MetamorphosisModule.register()
  ],
  controllers: [EducationController],
  providers: [EducationService]
})
export class EducationModule {
}
