import { Ctl_Privilege } from '../../ctl_privileges/entities/ctl_privilege.entity';
import { Ctl_Role } from '../../ctl_roles/entities/ctl_roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity()
export class Mnt_Roles_Privileges {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Ctl_Role, role => role.id, {
    onDelete: 'CASCADE',
  })
  role: Ctl_Role;
  
  @ManyToOne(() => Ctl_Privilege, privilege => privilege.id, {
    onDelete: 'CASCADE',
  })
  privilege: Ctl_Privilege;
}
