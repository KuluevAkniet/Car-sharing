import {ApiProperty} from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class CreateAutoDto {
    @ApiProperty()
    @IsString({message:'should be a string'})
    mark: string;


    @ApiProperty()
    @IsString({message:'should be a string'})
    model: string;


    @ApiProperty()
    @IsNumber({},{message:'should be a number'})
    number:number;
}
