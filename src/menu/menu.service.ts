/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuService {
  
  constructor(@InjectRepository(Menu) private menuRepository: Repository<Menu> ) {}
  
  async create(menu: CreateMenuDto): Promise<Menu>{
    const newMenu = this.menuRepository.create(menu);
    return await this.menuRepository.save(newMenu)
  }

 async getAll() {
    return await this.menuRepository.find();
  }

  async getOne(id: string) {
    return await this.menuRepository.findOne({
      where: {
        id
      }
    })
  }

  async update(id: string, updateMenuDto: UpdateMenuDto) {
    return await this.menuRepository.update({id}, updateMenuDto);
  }

  async remove(id: string) {
    return await this.menuRepository.delete({id});
  }
}
