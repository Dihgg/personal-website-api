import {Controller, Get} from "@nestjs/common";
import {EducationService} from "../services";
import {ApiOkResponse, ApiOperation, ApiTags} from "@nestjs/swagger";
import {Education} from "../entities";

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
        type: Education
    })
    @Get()
    findAll() {
        return this.educationService.findAll();
    }
}
