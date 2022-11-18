import { Auto } from 'src/auto/auto.entity';
import { Type } from 'class-transformer';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';

@Entity()
export class Rent {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Auto, (autos) => autos.rent)
  @JoinColumn({name : 'autoId'})
  autos : Auto

  @Column()
  autoId : number;

  @Column()
  tariff : number;

  @Type(() => Date)
  @Column('text')
  startDay : Date;

  @Type(() => Date)
  @Column('text')
  endDay : Date;

  @Column()
  cost : number;

  @Column()
  distance : number;
}