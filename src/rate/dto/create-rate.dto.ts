import {ApiProperty} from "@nestjs/swagger";
import { IsNumber} from "class-validator";

export class CreateRateDto {
    @ApiProperty()
    @IsNumber({},{message:'should be a string'})
    start_day: number;



    @ApiProperty()
    @IsNumber({},{message:'should be a number'})
    end_day:number;
}
