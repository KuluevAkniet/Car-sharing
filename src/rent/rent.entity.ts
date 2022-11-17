import { Auto } from 'src/auto/auto.entity';
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne} from 'typeorm';

@Entity()
export class Rent {
  @PrimaryGeneratedColumn()
  id: number;
  
  @ManyToOne(() => Auto, (auto) => auto.autoId)
  auto : Auto

  @Column()
  startDay : string;

  @Column()
  endDay : string;
}