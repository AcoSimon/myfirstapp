// Importamos los decoradores y clases necesarias de @nestjs/common
import { Controller, Get, Req, Res, HttpCode, Param, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
// Importamos las interfaces Request y Response de express
import { Request, Response } from 'express';

// Usamos el decorador @Controller para definir un controlador que maneja las rutas que comienzan con '/hello'
@Controller('/hello')
export class HelloController {
  // Definimos una ruta GET utilizando el decorador @Get
  @Get()
  index(@Req() req: Request, @Res() res: Response) {
    // Enviamos una respuesta JSON con el mensaje 'Hello World' y un estado 200 (OK)
    res.status(200).json({ message: 'Hello World' });
  }

  // Definimos una ruta GET para '/hello/notfound' utilizando el decorador @Get
  @Get('notfound')
  @HttpCode(404) // Especificamos que esta ruta debe devolver un código de estado 404
  notFoundPage() {
    // Retornamos el mensaje '404 not found'
    return '404 not found';
  }

  // Definimos una ruta GET para '/hello/error' utilizando el decorador @Get
  @Get('error')
  @HttpCode(500) // Especificamos que esta ruta debe devolver un código de estado 500
  errorPage() {
    // Retornamos el mensaje 'error del servidor'
    return 'error del servidor';
  }

  // Definimos una ruta GET para '/hello/error' utilizando el decorador @Get
  @Get('new')
  @HttpCode(201) // Especificamos que esta ruta debe devolver un código de estado 500
  sendData() {
    // Retornamos el mensaje 'error del servidor'
    return 'EnvioCorrecto';
  }
  @Get('ticket/:num')
  getNumber(@Param('num', ParseIntPipe) num: number) {
    return num+14;
  }
  @Get('active/:status')
  getStatus(@Param('status', ParseBoolPipe) status: boolean) {
    console.log(typeof status);
    return status;
  }

  
}

