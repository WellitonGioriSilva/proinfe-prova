import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './entities/aluno.entity';
import { Contato } from 'src/contato/entities/contato.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno, Contato])],
  controllers: [AlunoController],
  providers: [AlunoService],
})
export class AlunoModule {}
