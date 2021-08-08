import { Controller, Get, Post, Body, Patch, Param, Delete } from "@nestjs/common";
import { EducationService } from "../services/education.service";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { EducationDto } from "../dto";

@ApiTags("Education")
@Controller("education")
export class EducationController {
  constructor(private readonly educationService: EducationService) {
  }

  @ApiOperation({
    summary: "Education Information",
    description: "Get All education information"
  })
  @ApiOkResponse({
    description: "List of education locations",
    isArray: true,
    type: EducationDto
  })
  @Get()
  findAll() {
    return this.educationService.findAll();
  }
}
