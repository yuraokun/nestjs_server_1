import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('manage_user')
export class ManageUser {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
}
