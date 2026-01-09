import { Privilege } from '../../ctl_privileges/entities/ctl_privilege.entity';
import { Role } from '../../ctl_roles/entities/ctl_roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity('mnt_roles_privileges')
export class RolesPrivileges {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Role, role => role.id, {
    onDelete: 'CASCADE',
  })
  role: Role;
  
  @ManyToOne(() => Privilege, privilege => privilege.id, {
    onDelete: 'CASCADE',
  })
  privilege: Privilege;
}
