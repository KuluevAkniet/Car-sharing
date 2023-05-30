import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, isNumber, IsNumber } from "class-validator";

export class CreateRentDto{

    @IsNotEmpty()
    @IsNumber()
    readonly autoId : number;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    readonly tariff : number;

    @IsNotEmpty()
    @ApiProperty()
    readonly startDay: Date;

    @IsNotEmpty()
    readonly endDay: Date;

    cost? : number;

    distance? : number;

    @IsNumber()
    @ApiProperty()
    readonly userId : number;

    
}