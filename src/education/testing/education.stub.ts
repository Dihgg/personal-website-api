import { Education } from "../entities";
import { EducationDto } from "../dto";

export class EducationStub {

  static getEntity(): Education {
    return {
      id: 1,
      dateIn: new Date(),
      dateOut: new Date(),
      name: "Fake Name",
      description: "Fake Description"
    };
  }

  static getEntities(n: number = 1): Education[] {
    return Array<Education>(n).fill(this.getEntity());
  }

  static getDto(): EducationDto {
    return <EducationDto> this.getEntity();
  }

  static getDtos(n: number = 1): EducationDto[] {
    return Array<EducationDto>(n).fill(this.getDto());
  }
}