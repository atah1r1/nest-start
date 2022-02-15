import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customerService: CustomersService) { }

    @Get('users')
    getUsers() {
        return this.customerService.getAllUsers();
    }

    @Get('users/:id')
    getUserById(@Param('id', ParseIntPipe) id: number) {
        const user = this.customerService.getUserById(id);
        if (user) return user;
        throw new HttpException('User not found', HttpStatus.BAD_REQUEST)
    }

    @Post('/users/add')
    @UsePipes(ValidationPipe)
    addUser(@Body() createCustomerDto: CreateCustomerDto) {
        this.customerService.createCustomer(createCustomerDto);
        throw new HttpException('', HttpStatus.CREATED);
    }
}
