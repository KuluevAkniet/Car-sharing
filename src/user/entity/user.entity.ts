import { Entity, PrimaryGeneratedColumn,Column } from "typeorm";

@Entity()
export class  User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({select:true})
    name:string;

    
    @Column({select:true})
    surname:string;


    @Column({select:true})
    email:string;

    @Column({select:true})
    year:number;
}
