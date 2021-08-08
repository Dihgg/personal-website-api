import { Test, TestingModule } from '@nestjs/testing';
import { EducationController } from './education.controller';
import { EducationService } from '../services/education.service';
import { EducationServiceStub } from "../services/education.service.stub";
import { EducationStub } from "../testing";

describe('EducationController', () => {
  let controller: EducationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EducationController],
      providers: [{
        provide: EducationService,
        useClass: EducationServiceStub
      }],
    }).compile();

    controller = module.get<EducationController>(EducationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return education', async () => {
    jest.spyOn(EducationServiceStub.prototype, 'findAll').mockResolvedValue(EducationStub.getDtos())
    const response = await controller.findAll();
    expect(response[0].id).toEqual(EducationStub.getDto().id);
  });

});
