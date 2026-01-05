import { Mnt_Roles_Users } from '../../mnt_roles_users/entities/mnt_roles_users.entity';
import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, OneToMany } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50, nullable: true })
  middleName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 50, nullable: true })
  secondLastName: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 255, select: false })
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => Mnt_Roles_Users, role_user => role_user.user)
  role_users: Mnt_Roles_Users[];
}
