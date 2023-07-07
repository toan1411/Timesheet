import { IsBoolean, IsEmail, IsNumber, Length } from "class-validator";


export class CreateUserDTO{
    @Length(5)
    username: string;
    
    @Length(8)
    password: string;

    @Length(8)
    retypePassword:string;

    @Length(2)
    firstName: string;

    @Length(2)
    lastName: string;

    @Length(2)
    sex: string;

    @Length(10)
    phoneNumber: string;

    @IsBoolean()
    isActive: boolean;

    @Length(5)
    jobTitble: string;

    @IsEmail()
    email: string;

    @IsNumber()
    idOfProject: number;
}