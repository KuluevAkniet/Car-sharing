import { Rent } from "src/rent/entity/rent.entity";
import {Column, Entity, OneToOne, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Rate {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({select:true})
    price:number;

    @Column({select:true})
    distance:number;

    @OneToOne(() => Rent,rent => rent.rate_id)
    rent:Rent

}