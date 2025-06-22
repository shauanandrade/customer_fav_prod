import {IsEmail, IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";


export class AuthSignInDto {
    @ApiProperty({
        required: true,
    })
    @IsNotEmpty({
        message: 'Autenticação é invalída.',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        required: true,
    })
    @IsNotEmpty({
        message: 'Autenticação é invalída.'
    })
    password: string;
}