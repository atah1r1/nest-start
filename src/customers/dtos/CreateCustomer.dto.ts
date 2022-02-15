import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumberString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto {
    @IsNumberString()
    id: number;

    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsEmail()
    email: string;

    @IsNotEmptyObject()
    @ValidateNested() 
    @Type(() => CreateAddressDto)
    address: CreateCustomerDto;
}