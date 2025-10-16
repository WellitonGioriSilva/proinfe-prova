import { Aluno } from 'src/aluno/entities/aluno.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Contato {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  telefone: string;
  @Column({ nullable: true })
  email: string;

  @OneToOne(() => Aluno, (aluno) => aluno.contato, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'aluno_id' })
  aluno: Aluno;
}
