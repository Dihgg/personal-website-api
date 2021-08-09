import {Education} from "../entities";

export interface IEducation {
  readonly id: number;
  readonly name: string;
  readonly description?: string;
  readonly dateIn: Date;
  readonly dateOut?: Date;
}

export interface IEducationService {
  findAll(): Promise<Education[]>;
}