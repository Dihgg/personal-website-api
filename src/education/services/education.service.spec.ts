import { Test, TestingModule } from "@nestjs/testing";
import { EducationService } from "./education.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { FactoryMock, MockType } from "../../testing";
import { Education } from "../entities";
import { Repository } from "typeorm";
import { ConversionService } from "@fabio.formosa/metamorphosis-nest";
import { EducationStub } from "../testing";

describe("EducationService", () => {
  let service: EducationService;
  let repository: MockType<Repository<Education>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{
        provide: getRepositoryToken(Education),
        useFactory: FactoryMock.repositoryMockFactory
      }, {
        provide: ConversionService,
        useFactory: FactoryMock.conversionMockFactory
      },
        EducationService
      ]
    }).compile();

    service = module.get<EducationService>(EducationService);
    repository = module.get(getRepositoryToken(Education));
  });

  beforeEach(() => {
    repository.find.mockReturnValue(EducationStub.getEntities());
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("Should return a list of education", async () => {
    const response = await service.findAll();
    expect(response[0].id).toEqual(EducationStub.getDto().id);
  });
});
