import { CreateTaskDto } from './dto/create-task.dto';
// Importamos los decoradores y clases necesarias de @nestjs/common
import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  Query,
  Param,
  UsePipes,
  ValidationPipe
} from '@nestjs/common';
// Importamos el servicio TaskService
import { TaskService } from './task.service';
import { UpdateTaskDto } from './dto/update-task.dto';

// Definimos un controlador usando el decorador @Controller
@Controller('/task')
export class TaskController {
  // Inyectamos el servicio TaskService mediante el constructor
  constructor(private TaskService: TaskService) {}

  // Definimos una ruta GET para '/task' utilizando el decorador @Get
  @Get()
  getAllTask(@Query() query: any) {
    console.log(query);
    // Llamamos al método getTasks del servicio TaskService y devolvemos su resultado
    return this.TaskService.getTasks();
  }

  @Get('/:id') //task/2 o task/3 o task/4
  getTask(@Param('id') id:string) {
    return this.TaskService.getTask(parseInt(id));
  }

  // Definimos una ruta POST para '/task' utilizando el decorador @Post
  @Post()
  @UsePipes(new ValidationPipe())
  postTask(@Body() task: CreateTaskDto) {
    // Llamamos al método createTask del servicio TaskService y devolvemos su resultado
    return this.TaskService.createTask(task);
  }

  // Definimos una ruta Put para '/task' utilizando el decorador @Put
  @Put()
  putTask(@Body() task: any) {
    return this.TaskService.putTask(task);
  }

  // Definimos una ruta Patch para '/task' utilizando el decorador @Patch
  @Patch()
  patchTask(@Body() task: UpdateTaskDto) {
    return this.TaskService.patchTask(task);
  }

  // Definimos una ruta Patch para '/task' utilizando el decorador @Patch
  @Delete()
  deleteTask(@Body() task: any) {
    return this.TaskService.deleteTask(task);
  }

  
}
