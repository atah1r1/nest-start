import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly UsersService: UsersService) { }

    @Get('')
    getUsers() {
        return this.UsersService.getUsers();
    }

    @Get('/:username')
    getUserByUsername(@Param('username') username: string) {
        const users = this.UsersService.getUserByUsername(username);
        if (users) return users;
        throw new HttpException('Username not found', HttpStatus.BAD_REQUEST);
    }
}
