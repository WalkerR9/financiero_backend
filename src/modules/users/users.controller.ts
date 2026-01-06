import { Controller, Get, Post, Body, Param, Delete, Patch, ParseIntPipe, ParseBoolPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
  return this.usersService.create(createUserDto);
  }

  @Patch(':id/toggleStatus')
  async deactivate(@Param('id', ParseIntPipe) id: number, @Param('activeStatus', ParseBoolPipe) activeStatus: boolean) {
    await this.usersService.toggleStatus(id, activeStatus);
    return { message: `Estado cambiado con exito` };
  }
}
