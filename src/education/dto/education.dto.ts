import { ApiProperty } from "@nestjs/swagger";
import { IsDate } from "class-validator";
import { IEducation } from '../interfaces';

export class EducationDto implements IEducation {

  @ApiProperty()
  readonly id: number;

  @ApiProperty({
    example: "A place Name"
  })
  readonly name: string;

  @ApiProperty({
    example: "A place description"
  })
  readonly description?: string;

  @ApiProperty({
    example: '12-06-2020'
  })
  @IsDate()
  readonly dateIn: Date;

  @ApiProperty({
    example: '12-06-2020'
  })
  @IsDate()
  readonly dateOut?: Date;
}