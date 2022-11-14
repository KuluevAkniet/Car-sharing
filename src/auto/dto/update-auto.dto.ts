import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateAutoDto } from "./create-auto.dto";


export class UpdateAuto extends  PartialType(CreateAutoDto) {
       @ApiProperty()
       mark: string;
}