// Importamos los decoradores IsString y MinLength de class-validator
import { IsString, Min, MinLength } from 'class-validator';

// Definimos la clase DTO para crear una tarea
export class CreateTaskDto {
  // Validamos que el campo title sea una cadena de texto y tenga una longitud mínima de 1
  @IsString()
  @MinLength(1)
  title: string;

  // Validamos que el campo descripción sea una cadena de texto y tenga una longitud mínima de 1
  @IsString()
  @MinLength(1)
  descripcion: string;
}
