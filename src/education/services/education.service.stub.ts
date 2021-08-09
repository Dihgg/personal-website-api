import { IEducationService } from "../interfaces";
import { EducationStub } from "../testing";
import {Education} from "../entities";

export class EducationServiceStub implements IEducationService {
  findAll(): Promise<Education[]> {
    return Promise.resolve(EducationStub.getEntities());
  }

}