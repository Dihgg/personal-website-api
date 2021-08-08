import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Type, Exclude } from 'class-transformer';
import { IEducation } from "../interfaces";

@Entity({
  name: 'education'
})
export class Education implements IEducation {

  @PrimaryGeneratedColumn()
  @Exclude()
  readonly id: number;

  @Column()
  readonly name: string;

  @Column()
  readonly description?: string;

  @Column()
  @Type(() => Date)
  readonly dateIn: Date;

  @Column()
  @Type(() => Date)
  readonly dateOut?: Date;
}
