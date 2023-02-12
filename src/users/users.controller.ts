import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  // @Post()
  // signup(@Body() body: CreateUserDto ) {
  // }
  constructor(private usersService: UsersService) {}

  @Post('signup')
  async signup(@Body() body: CreateUserDto) {
    const user = await this.usersService.create(body);
    return user;
  }

  @Get()
  async getAllUsers() {
    return await this.usersService.getAllUsers();
  }

  @Post('delete')
  async deleteUser(@Body() body: { id: number }) {
    const user = await this.usersService.delete(body.id);
    return user;
  }
}
