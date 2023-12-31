import { IsBoolean, IsEmail, IsEnum, IsNumber, Length } from "class-validator";
import { Role } from "../entities/role.enum";
import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDTO{
    @Length(5)
    @ApiProperty({example:"toan123"})
    username: string;
    
    @Length(8)
    @ApiProperty({example:"12345678"})
    password: string;

    @Length(8)
    @ApiProperty({example:"12345678"})
    retypePassword:string;

    @Length(2)
    @ApiProperty({example:"Toan"})
    firstName: string;

    @Length(2)
    @ApiProperty({example:"Nguyen"})
    lastName: string;

    @Length(2)
    @ApiProperty({example:"Nam"})
    sex: string;

    @Length(10)
    @ApiProperty({example:"0123456789"})
    phoneNumber: string;

    @IsBoolean()
    @ApiProperty({example: true})
    isActive: boolean;


    @IsEmail()
    @ApiProperty({example:"nguyentoan@gmail.com"})
    email: string;

    @IsNumber()
    @ApiProperty({example:1})
    idOfProject: number;

    @IsEnum(Role)
    @ApiProperty({example:"user"})
    roles:Role[];
}