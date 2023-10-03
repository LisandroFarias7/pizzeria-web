/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { ValidationPipe } from '@nestjs/common'; // Importa ValidationPipe de NestJS

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async create(@Body(new ValidationPipe()) createMenuDto: CreateMenuDto) {
    // Utiliza el ValidationPipe para aplicar las validaciones
    const menu = await this.menuService.create(createMenuDto);
    return menu;
  }

  @Get()
  async getAll() {
    const menus = await this.menuService.getAll();
    return menus;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const menu = await this.menuService.getOne(id);
    if (!menu) {
      throw new HttpException('Menú no encontrado', HttpStatus.NOT_FOUND);
    }
    return menu;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body(new ValidationPipe()) updateMenuDto: UpdateMenuDto) {
    // Utiliza el ValidationPipe para aplicar las validaciones
    const updatedMenu = await this.menuService.update(id, updateMenuDto);
    if (!updatedMenu) {
      throw new HttpException('Menú no encontrado', HttpStatus.NOT_FOUND);
    }
    return updatedMenu;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deletedMenu = await this.menuService.remove(id);
    if (!deletedMenu) {
      throw new HttpException('Menú no encontrado', HttpStatus.NOT_FOUND);
    }
    return deletedMenu;
  }
}
