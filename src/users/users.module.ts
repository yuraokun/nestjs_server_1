import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ManageUser } from 'src/entities/manage_user';

@Module({
  imports: [TypeOrmModule.forFeature([ManageUser])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
