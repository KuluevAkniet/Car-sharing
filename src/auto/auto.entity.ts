import { Rent } from 'src/rent/rent.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';

@Entity()
export class Auto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  num: string;

  @Column()
  vin: string;

  @OneToMany(() => Rent, (rent) => rent.autos)
  rent  : Rent[]
}