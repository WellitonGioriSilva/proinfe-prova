import { Contato } from 'src/contato/entities/contato.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Aluno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'date' })
  dataNascimento: Date;

  @Column({ type: 'enum', enum: ['Masculino', 'Feminino'] })
  sexo: string;

  @Column({
    type: 'enum',
    enum: ['Brasileira', 'Brasileira-naturalizada', 'Estrangeira'],
  })
  nacionalidade: string;

  @Column()
  cpf: string;

  @OneToMany(() => Contato, (contato) => contato.aluno, {
    cascade: true,
    eager: true,
  })
  contato: Contato[];
}
