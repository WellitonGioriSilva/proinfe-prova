import {
  IsDateString,
  IsString,
  Min,
  Max,
  IsEnum,
  IsArray,
  ValidateNested,
  ArrayMinSize,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreateContatoDto } from 'src/contato/dto/create-contato.dto';

export class CreateAlunoDto {
  @IsString()
  @Min(5)
  nome: string;

  @IsDateString()
  dataNascimento: string;

  @IsEnum(['Brasileira', 'Brasileira-naturalizada', 'Estrangeira'])
  nacionalidade: string;

  @IsEnum(['Masculino', 'Feminino'])
  sexo: string;

  @IsString()
  @Max(11)
  cpf: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateAlunoDto)
  @ArrayMinSize(1)
  contatos: CreateContatoDto[];
}
