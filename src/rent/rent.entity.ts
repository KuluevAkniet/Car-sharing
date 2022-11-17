import { Auto } from 'src/auto/auto.entity';
import { Transform } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';

@Entity()
export class Rent {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  startDay : string;

  @Column()
  endDay : string;

  @Column()
  autoId : number;

  @ManyToOne(() => Auto, (autos) => autos.rent)
  @JoinColumn({name : 'autoId'})
  autos : Auto
}