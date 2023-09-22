/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuDto } from './create-menu.dto';

export class UpdateMenuDto extends PartialType(CreateMenuDto) {
    id?: string
    titulo: string
    descripcion: string
    precio: number
    imageUrl: string
}
