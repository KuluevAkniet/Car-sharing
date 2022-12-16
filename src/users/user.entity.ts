import { Rent } from "src/rent/rent.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  login: string;

  @Column()
  password: string;

  @OneToMany(() => Rent, (rent) => rent.users)
  rent: Rent[];

}