import { IsEmail, IsOptional } from 'class-validator';

export class CreateContatoDto {
  @IsOptional()
  telefone: string;

  @IsOptional()
  @IsEmail()
  email: string;
}
