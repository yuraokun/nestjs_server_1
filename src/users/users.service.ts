import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ManageUser } from '../entities/manage_user';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/createUser.dto';
import { DataSource } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(ManageUser) private repo: Repository<ManageUser>,
  ) {}

  create(userData: CreateUserDto) {
    const user = this.repo.create(userData);
    return this.repo.save(user);
  }

  getAllUsers() {
    return this.repo.find();
  }

  async delete(id) {
    return await this.repo.delete(id);
  }
}
