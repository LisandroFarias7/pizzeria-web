/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  
  constructor(@InjectRepository(Menu) private menuRepository: Repository<Menu>) {}
  
  async create(menu: CreateMenuDto): Promise<Menu> {
    // Realiza validaciones aquí antes de crear un nuevo menú
    if (!menu || !menu.titulo || !menu.descripcion || !menu.precio || !menu.imageUrl) {
      throw new BadRequestException('Todos los campos son requeridos.');
    }

    const newMenu = this.menuRepository.create(menu);
    return await this.menuRepository.save(newMenu);
  }

  async getAll() {
    return await this.menuRepository.find();
  }

  async getOne(id: string) {
    const menu = await this.menuRepository.findOne({
      where: {
        id
      }
    });
    if (!menu) {
      throw new NotFoundException('Menú no encontrado.');
    }
    return menu;
  }

  async update(id: string, updateMenuDto: UpdateMenuDto) {
    // Realiza validaciones aquí antes de actualizar el menú
    if (!updateMenuDto || !updateMenuDto.titulo || !updateMenuDto.descripcion || !updateMenuDto.precio || !updateMenuDto.imageUrl) {
      throw new BadRequestException('Todos los campos son requeridos.');
    }

    const menu = await this.menuRepository.findOne({
      where: {
        id
      }
    });
    if (!menu) {
      throw new NotFoundException('Menú no encontrado.');
    }

    await this.menuRepository.update(id, updateMenuDto);
    return menu;
  }

  async remove(id: string) {
    const menu = await this.menuRepository.findOne({
      where: {
        id
      }
    });
    if (!menu) {
      throw new NotFoundException('Menú no encontrado.');
    }

    return await this.menuRepository.delete(id);
  }
}
