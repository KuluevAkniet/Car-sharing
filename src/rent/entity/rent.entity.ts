import { Auto } from "src/auto/entity.ts/auto.entity";
import { Rate } from "src/rate/entity/rate.entity";
import {Column, Entity, PrimaryGeneratedColumn,JoinColumn,OneToOne} from "typeorm";

@Entity()
export class Rent {
    
    @PrimaryGeneratedColumn()
    id:number;

    @Column({select:true})
    auto_id:number;

    
    @Column({select:true})
    rate_id:number;


    @Column({select:true})
    start_day:number;


    @Column({select:true})
    end_day:number;



    @OneToOne(() => Auto,auto =>  auto.rent)
    @JoinColumn()
    auto: Auto


    @OneToOne(() => Rate,rate => rate)
    @JoinColumn()
    rate:Rate
}
