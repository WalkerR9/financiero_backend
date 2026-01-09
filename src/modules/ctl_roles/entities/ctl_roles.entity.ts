import { RolesUsers } from '../../mnt_roles_users/entities/mnt_roles_users.entity';
import { RolesPrivileges } from '../../mnt_roles_privileges/entities/mnt_roles_privileges.entity';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity('ctl_roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false })
  name: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => RolesPrivileges, role_privilege => role_privilege.role)
  role_privileges: RolesPrivileges[];

  @OneToMany(() => RolesUsers, role_user => role_user.user)
  role_users: RolesUsers[];
}