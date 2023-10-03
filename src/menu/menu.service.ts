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
  
  create(menu: CreateMenuDto): Promise<Menu>{
    const newMenu = this.menuRepository.create(menu);
    return this.menuRepository.save(newMenu)
  }

 getAll() {
    return this.menuRepository.find();
  }

  getOne(id: string) {
    return this.menuRepository.findOne({
      where: {
        id
      }
    })
  }

  update(id: string, updateMenuDto: UpdateMenuDto) {
    return this.menuRepository.update({id}, updateMenuDto);
  }

  async remove(id: string) {
    return await this.menuRepository.delete({id});
  }
}
