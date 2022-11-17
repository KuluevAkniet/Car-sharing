import { Auto } from "src/auto/auto.entity";

export class CreateRentDto{

    readonly startDay: string;

    readonly endDay: string;

    readonly autoId: Auto

}