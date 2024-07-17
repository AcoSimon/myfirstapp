// Importamos el decorador Injectable de @nestjs/common
import { Injectable } from '@nestjs/common';
// Importamos el DTO para crear un usuario
import { CreateUserDto } from './dto/create-user-dto';

// Usamos el decorador @Injectable para marcar la clase como un proveedor de servicios en NestJS
@Injectable()
export class UsersService {
    // Arreglo privado para almacenar los usuarios
    private users: any[] = [
        {
            id: 1,
            name: 'Acosta',
            phone: '3413153523',
        },
        {
            id: 2,
            name: 'Saccone',
            phone: '3413577058',
        }
    ];

    // Método para obtener todos los usuarios
    getUsers() {
        return this.users;
    }

    // Método para crear un nuevo usuario
    createUser(user: CreateUserDto) {
        // Añadimos el nuevo usuario al arreglo users
        this.users.push(user);

        // Devolvemos el nuevo usuario con un ID asignado
        return {
            ...user,
            id: this.users.length + 1, // Asignamos un ID único al nuevo usuario
        };
    }
}
