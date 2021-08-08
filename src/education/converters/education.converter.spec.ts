import { Test, TestingModule } from '@nestjs/testing';
import EducationConverter from './education.converter';
import { Education } from "../entities";

describe('Education Converter', () => {
  let service: EducationConverter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EducationConverter],
    }).compile();

    service = module.get<EducationConverter>(EducationConverter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should convert', () => {
    const education = new Education();
    education.id = 1;
    const response = service.convert(education);
    expect(response.id).toEqual(1);
  });
});
