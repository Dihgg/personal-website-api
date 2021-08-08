import { Convert, Converter } from '@fabio.formosa/metamorphosis';
import { Injectable } from "@nestjs/common";
import { plainToClass } from 'class-transformer';
import { Education } from "../entities";
import { EducationDto } from "../dto";

@Injectable()
@Convert(Education, EducationDto)
export default class EducationConverter implements Converter<Education, EducationDto> {

  public convert(source: Education): EducationDto {
    return plainToClass(EducationDto, source);
  }}