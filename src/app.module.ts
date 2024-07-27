// Importamos el decorador Module de @nestjs/common
import { Module } from '@nestjs/common';
// Importamos otros módulos que se usarán en este módulo principal
import { ProjectsModule } from './projects/projects.module';
import { UsersModule } from './users/users.module';
import { TaskModule } from './task/task.module';
// Importamos los controladores
import { HelloController } from './hello/hello.controller';
import { BanaversoModule } from './banaverso/banaverso.module';

@Module({
  // Importamos otros módulos para que estén disponibles en el módulo principal
  imports: [ProjectsModule, UsersModule, TaskModule, BanaversoModule, ],
  // Declaramos los controladores que pertenecen a este módulo
  controllers: [HelloController, ],
})
// Exportamos la clase AppModule como el módulo principal de la aplicación
export class AppModule {}
