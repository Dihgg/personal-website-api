import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Education } from "../entities";
import { Repository } from "typeorm";
import { IEducationService } from "../interfaces";

@Injectable()
export class EducationService implements IEducationService {
  constructor(
    @InjectRepository(Education)
    private repository: Repository<Education>
  ) {
  }

  async findAll(): Promise<Education[]> {
    return this.repository.find();
  }
}
