// Importamos los decoradores y clases necesarias de @nestjs/common
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
// Importamos el servicio UsersService
import { UsersService } from './users.service';
// Importamos el DTO para crear un usuario
import { CreateUserDto } from './dto/create-user-dto';

// Definimos un controlador usando el decorador @Controller
@Controller('/users')
export class UsersController {
    // Inyectamos el servicio UsersService mediante el constructor
    constructor(private UsersService: UsersService) {}

    // Definimos una ruta GET utilizando el decorador @Get
    @Get()
    getUsers() {
        // Llamamos al método getUsers del servicio UsersService y devolvemos su resultado
        return this.UsersService.getUsers();
    }

    // Definimos una ruta POST utilizando el decorador @Post
    @Post()
    // Usamos el decorador @UsePipes para aplicar el ValidationPipe a la solicitud
    @UsePipes(new ValidationPipe())
    createUser(@Body() user: CreateUserDto) {
        // Llamamos al método createUser del servicio UsersService con los datos validados y devolvemos su resultado
        return this.UsersService.createUser(user);
    }
}
