import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { User, UserSerialized } from 'src/users/types/User';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username: 'atahiri',
            password: 'atahiri'
        },
        {
            username: 'ehakam',
            password: 'ehakam'
        },
        {
            username: 'aes-salm',
            password: 'aes-salm'
        }
    ];

    getUsers() {
        return this.users.map((user) => new UserSerialized(user));
    }

    getUserByUsername(username: string) {
        return this.users.find((urs) => urs.username === username);
    }

}
