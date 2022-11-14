import {ApiProperty} from "@nestjs/swagger";
import { IsEmail,IsString,IsNumber } from "class-validator";

export class CreateUserDto {
    @ApiProperty()
    @IsString({message:'should be a string'})
    name: string;


    @ApiProperty()
    @IsString({message:'should be a string'})
    surname: string;


    @ApiProperty()
    @IsEmail({},{message:'should be a email'})
    email:string;


    @ApiProperty()
    @IsNumber({},{message:'should be a number'})
    year:number;
}
