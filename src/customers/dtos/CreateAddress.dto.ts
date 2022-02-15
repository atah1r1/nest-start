import { IsNotEmpty, IsNumberString } from "class-validator";

export class CreateAddressDto {
    @IsNotEmpty()
    line1: string;

    line2?: string;

    @IsNumberString()
    zip: number;

    @IsNotEmpty()
    city: string;

    @IsNotEmpty()
    country: string;
}