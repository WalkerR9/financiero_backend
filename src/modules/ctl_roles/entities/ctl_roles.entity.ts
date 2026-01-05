import { Mnt_Roles_Users } from '../../mnt_roles_users/entities/mnt_roles_users.entity';
import { Mnt_Roles_Privileges } from '../../mnt_roles_privileges/entities/mnt_roles_privileges.entity';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class Ctl_Role {
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

  @OneToMany(() => Mnt_Roles_Privileges, role_privilege => role_privilege.role)
  role_privileges: Mnt_Roles_Privileges[];

  @OneToMany(() => Mnt_Roles_Users, role_user => role_user.user)
  role_users: Mnt_Roles_Users[];
}