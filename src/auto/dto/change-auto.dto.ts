import { IsNotEmpty, IsString } from "class-validator";

export class ChangeAutoDto{

    @IsNotEmpty()
    @IsString()
    readonly brand?: string;

    @IsNotEmpty()
    @IsString()
    readonly model?: string;

    @IsNotEmpty()
    @IsString()
    readonly num?: string;

    @IsNotEmpty()
    @IsString()
    readonly vin?: string;
}