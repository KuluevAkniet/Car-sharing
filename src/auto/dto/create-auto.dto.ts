import { IsNotEmpty, IsString } from "class-validator";

export class CreateAutoDto{

    @IsString()
    readonly brand: string;

    @IsString()
    readonly model: string;

    @IsString()
    readonly num: string;

    @IsString()
    readonly vin: string;
}