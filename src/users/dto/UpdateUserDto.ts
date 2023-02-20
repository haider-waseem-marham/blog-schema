import { IsNotEmpty, IsString , IsEmail } from "class-validator";

export class UpdateUserDto {
    
    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    password: string;

}