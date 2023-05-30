import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateAutoDto{

    @IsString()
    @ApiProperty()
    readonly brand: string;

    @IsString()
    @ApiProperty()
    readonly model: string;

    @IsString()
    @ApiProperty()
    readonly num: string;

    @IsString()
    @ApiProperty()
    readonly vin: string;
}