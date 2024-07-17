import { NotFoundException } from '@nestjs/common';
// Importamos el decorador Injectable de @nestjs/common
import { Injectable, HttpCode } from '@nestjs/common';
import { UpdateTaskDto } from './dto/update-task.dto';

export interface User {
  name: string;
  age: number;
}

// Usamos el decorador @Injectable para marcar la clase como un proveedor de servicios en NestJS
@Injectable()
export class TaskService {

private tasks = []

  // Definimos el método getTasks que devuelve una lista de tareas
  getTasks() {
    return this.tasks
  }


  getTask(id: number) {
    // Busca la tarea en el arreglo `this.tasks` basándose en su `id`
    const taskFound = this.tasks.find(task => task.id === id);

    // Si no se encuentra la tarea, se lanza una excepción NotFoundException
    if (!taskFound) {
        throw new NotFoundException(`La tarea con el id ${id} no fue encontrada`);
    }

    // Retorna la tarea encontrada
    return taskFound;
}

  createTask(task: any) {
    // Imprimimos en la consola el cuerpo de la solicitud (el nuevo task)
    console.log(task);

    // Asumiendo que `this.tasks` es una propiedad del servicio donde se almacenan las tareas
    const newTask = {
        ...task,
        id: this.tasks.length + 1, // Asumiendo que `this.tasks` es un arreglo de tareas y queremos asignar un ID único
    };

    this.tasks.push(newTask); // Agregamos la nueva tarea al arreglo `this.tasks`

    return newTask; // Retornamos la nueva tarea creada
}


  putTask(task: UpdateTaskDto) {
    // Imprimimos en la consola el cuerpo de la solicitud (el nuevo task)
    console.log(task);
    this.tasks.push(task);
    return task;
  }

  patchTask(task: any) {
    // Imprimimos en la consola el cuerpo de la solicitud (el nuevo task)
    console.log(task);
    this.tasks.push(task);
    return task;
  }

  deleteTask(task: any) {
    // Imprimimos en la consola el cuerpo de la solicitud (el nuevo task)
    console.log(task);
    this.tasks.push(task);
    return task;
  }
}
