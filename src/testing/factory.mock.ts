import {Repository} from "typeorm";
import { plainToClass } from "class-transformer";

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export class FactoryMock {

  static repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
    find: jest.fn( entity => entity),
  }));

  static conversionMockFactory: () => MockType<any> = jest.fn(() => ({
    convert: jest.fn( entity => entity),
    convertAll: jest.fn( entity => entity)
  }));
}