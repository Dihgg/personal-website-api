import { IEducationService } from "../interfaces";
import { EducationDto } from "../dto";
import { EducationStub } from "../testing";

export class EducationServiceStub implements IEducationService {
  findAll(): Promise<EducationDto[]> {
    return Promise.resolve([EducationStub.getDto()]);
  }

}