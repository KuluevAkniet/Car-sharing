import { Entity,PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()

export class Autos_auto_rent {
    @PrimaryGeneratedColumn()
    id:number;

    
    @Column({select:true})
    autoid:number;

    
    @Column({select:true})
    rentid:number;
}