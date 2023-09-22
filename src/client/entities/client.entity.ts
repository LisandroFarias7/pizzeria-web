/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity({name: 'cliente'})
export class Client {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    domicilio: string

    @Column()
    telefono: number
}
