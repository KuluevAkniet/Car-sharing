import { Rent } from "src/rent/entity/rent.entity";
import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Auto {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({select:true})
    mark:string;

    
    @Column({select:true})
    model:string;


    @Column({select:true})
    number:number;

    @OneToOne(() => Rent,rent => rent.auto_id)
    rent:Rent
}
