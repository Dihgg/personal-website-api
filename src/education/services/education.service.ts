import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Education } from "../entities";
import { Repository } from "typeorm";
import { EducationDto } from "../dto";
import { ConversionService } from "@fabio.formosa/metamorphosis-nest";
import { IEducationService } from "../interfaces";

@Injectable()
export class EducationService implements IEducationService {
  constructor(
    @InjectRepository(Education)
    private repository: Repository<Education>,
    private readonly conversion: ConversionService
  ) {
  }

  async findAll(): Promise<EducationDto[]> {
    return <EducationDto[]>await this.conversion.convertAll(await this.repository.find(), EducationDto);
  }
}
