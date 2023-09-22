/* eslint-disable prettier/prettier */

import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: 'menu'})
export class Menu {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    titulo: string

    @Column()
    descripcion: string

    @Column()
    precio: number

    @Column()
    imageUrl: string
}
