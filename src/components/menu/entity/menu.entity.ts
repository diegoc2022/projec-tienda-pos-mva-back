import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { RolMenuEntity } from './rol-menu.entity'

@Entity({name:'tbl_menu'})
export class MenuEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  id_menu: number

  @Column()
  label: string

  @Column({ nullable: true })
  icon: string

  @Column()
  route: string

  @Column()
  orden: number

  @Column({ default: true })
  activo: boolean
  

  @OneToMany(() => RolMenuEntity, rm => rm.menu)
  rolMenus: RolMenuEntity[]
}
