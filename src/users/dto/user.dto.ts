import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @IsString()
  nome!: string;

  @IsNotEmpty({ message: 'O endereço é obrigatório' })
  @IsString()
  endereco!: string;

  @IsNotEmpty({ message: 'O nome da mãe é obrigatório' })
  @IsString()
  nomeMae!: string;

  @IsNotEmpty({ message: 'O estado civil é obrigatório' })
  @IsString()
  estadoCivil!: string;

  @IsString()
  cep?: string;

  @IsString()
  profissao?: string;
}

export class UpdateUserDto {
  @IsString()
  nome?: string;

  @IsString()
  endereco?: string;

  @IsString()
  nomeMae?: string;

  @IsString()
  estadoCivil?: string;

  @IsString()
  cep?: string;

  @IsString()
  profissao?: string;
}
