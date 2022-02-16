import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { UserSerialized } from 'src/users/types/User';

@Controller('users')
export class UsersController {

    constructor(private readonly UsersService: UsersService) { }

    // Return all users 
    @Get('')
    @UseInterceptors(ClassSerializerInterceptor)
    getUsers() {
        return this.UsersService.getUsers();
    }

    // Return single user with custom username
    @Get('/:username')
    @UseInterceptors(ClassSerializerInterceptor)
    getUserByUsername(@Param('username') username: string) {
        const user = this.UsersService.getUserByUsername(username);
        if (user) return new UserSerialized(user);
        throw new HttpException('Username not found', HttpStatus.BAD_REQUEST);
    }
}
