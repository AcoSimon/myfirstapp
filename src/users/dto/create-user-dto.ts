// Importamos los decoradores de class-validator
import { IsString, IsEmail, IsNotEmpty, Max, IsNumber } from 'class-validator';

// Definimos la clase DTO para crear un usuario
export class CreateUserDto {
  // Validamos que el campo email sea un correo electrónico, una cadena de texto y no esté vacío
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  // Validamos que el campo password sea una cadena de texto y no esté vacío
  @IsString()
  @IsNotEmpty()
  password: string;

  // Validamos que el campo name sea una cadena de texto y no esté vacío
  @IsString()
  @IsNotEmpty()
  name: string;

  // Validamos que el campo age sea un número y no supere 100
  @IsNumber()
  @Max(100)
  age: number;
}
