import { User } from '../../users/entities/user.entity';
import { Role } from '../../ctl_roles/entities/ctl_roles.entity';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, ManyToOne } from 'typeorm';

@Entity('mnt_roles_users')
export class RolesUsers {
  @PrimaryGeneratedColumn()
  id: number;

  //Relaciones
  @ManyToOne(() => Role, role => role.role_users, {
    onDelete: 'CASCADE',
  })
  role: Role;
  
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
