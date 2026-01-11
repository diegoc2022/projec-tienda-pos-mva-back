import { Entity, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm'
  import { RolEntity } from 'src/components/usuarios/entity/rol.entity' 
  import { MenuEntity } from './menu.entity'
  
  @Entity({name:'tbl_rol_menu'})
  export class RolMenuEntity {
  
    @PrimaryColumn()
    id_rol: number
  
    @PrimaryColumn()
    id_menu: number
  
    @ManyToOne(() => RolEntity, role => role.rolMenus, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_rol' })
    role: RolEntity
  
    @ManyToOne(() => MenuEntity, menu => menu.rolMenus, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'id_menu' })
    menu: MenuEntity
  }
  