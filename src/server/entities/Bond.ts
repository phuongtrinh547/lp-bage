import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bond {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column('date')
  maturityDate: string;

  @Column('decimal')
  couponRate: number;

  @Column()
  issuer: string;
}
