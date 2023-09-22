/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';

export class UpdateClientDto extends PartialType(CreateClientDto) {
    id?: string
    nombre: string
    apellido: string
    domicilio: string
    telefono: number
}
