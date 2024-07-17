// Importamos el decorador Module de @nestjs/common
import { Module } from '@nestjs/common';
// Importamos el controlador TaskController
import { TaskController } from './task.controller';
// Importamos el servicio TaskService
import { TaskService } from './task.service';

// Usamos el decorador @Module para definir un módulo en NestJS
@Module({
    // Declaramos los controladores que pertenecen a este módulo
    controllers: [TaskController],
    // Declaramos los proveedores (servicios) que pertenecen a este módulo
    providers: [TaskService]
})
// Exportamos la clase TaskModule como un módulo de NestJS
export class TaskModule {}
