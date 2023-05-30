import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class ChangeAutoDto{

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly brand?: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly model?: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly num?: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly vin?: string;
}