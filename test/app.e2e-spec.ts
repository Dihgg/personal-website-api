import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { getRepositoryToken } from "@nestjs/typeorm";
import { Education } from "../src/education/entities";
import { FactoryMock, MockType } from "../src/testing";
import { Repository } from "typeorm";
import { before } from "@nestjs/swagger/dist/plugin";
import { EducationStub } from "../src/education/testing";

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let educationRepository: MockType<Repository<Education>>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(Education),
          useFactory: FactoryMock.repositoryMockFactory
        }
      ],
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    educationRepository = moduleFixture.get(getRepositoryToken(Education));
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  describe('Education', () => {
    before(() => {
      educationRepository.find.mockReturnValue(EducationStub.getEntities());
    });
    it('/education/ (GET)', () => {
      return request(app.getHttpServer())
        .get('/education/')
        .expect(200);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
