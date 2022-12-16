import { IsDate, IsNotEmpty, isNumber, IsNumber } from "class-validator";

export class CreateRentDto{

    @IsNotEmpty()
    @IsNumber()
    readonly autoId : number;

    @IsNotEmpty()
    @IsNumber()
    readonly tariff : number;

    @IsNotEmpty()
    readonly startDay: Date;

    @IsNotEmpty()
    readonly endDay: Date;

    cost? : number;

    distance? : number;

    @IsNumber()
    readonly userId : number;

    
}