import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from './entities/aluno.entity';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private readonly alunoRepository: Repository<Aluno>,
  ) {}

  create(createAlunoDto: CreateAlunoDto) {
    const aluno = this.alunoRepository.create(createAlunoDto);
    return this.alunoRepository.save(aluno);
  }

  async findAll(nome: string) {
    const alunos = await this.alunoRepository.find({
      where: { nome: Like(`${nome}%`) },
    });
    return alunos;
  }

  async findOne(id: number) {
    const aluno = await this.alunoRepository.findOne({
      where: { id },
    });

    if (!aluno) throw new NotFoundException('Aluno não encontrado!');

    return aluno;
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto) {
    const aluno = await this.alunoRepository.preload({
      id: +id,
      ...updateAlunoDto,
    });

    if (!aluno) {
      throw new NotFoundException('Aluno não encontrado!');
    }

    return this.alunoRepository.save(aluno);
  }

  async remove(id: number) {
    const aluno = await this.findOne(id);
    return this.alunoRepository.remove(aluno);
  }
}
