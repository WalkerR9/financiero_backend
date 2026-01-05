import { User } from '../../users/entities/user.entity';
import { Ctl_Role } from '../../ctl_roles/entities/ctl_roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity('mnt_roles_users')
export class Mnt_Roles_Users {
  @PrimaryGeneratedColumn()
  id: number;

  //Relaciones
  @ManyToOne(() => Ctl_Role, role => role.role_users, {
    onDelete: 'CASCADE',
  })
  role: Ctl_Role;
  
  @ManyToOne(() => User, user => user.role_users, {
    onDelete: 'CASCADE',
  })
  user: User;

  //Auditoria

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;


}
