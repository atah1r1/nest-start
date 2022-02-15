import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {

    private users = [
        {
            id: 0,
            first_name: 'amine',
            last_name: 'tahiri',
            email: 'aminetahiri413@gmail.com'
        },
        {
            id: 1,
            first_name: 'abdlali',
            last_name: 'salmi',
            email: 'abdlalisalmi@gmail.com'
        },
        {
            id: 2,
            first_name: 'hakam',
            last_name: 'dev',
            email: 'hakamdev@gmail.com'
        }
    ]

    getAllUsers() {
        return this.users;
    }

    getUserById(id: number) {
        return this.users.find((user) => user.id === id);
    }

    createCustomer(customer: CreateCustomerDto) {
        this.users.push(customer);
    }
}
