import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsStrongPassword} from "class-validator";


export class CreateInputClientDto {
    @ApiProperty({
        type: "string",
        example: "Nome Cliente",
        required: true,
        description:"Nome do cliente"
    })
    @IsNotEmpty({
        message: "Nome é obrigatório."
    })
    name: string;

    @ApiProperty({
        type: "string",
        example: "cliente@email.com",
        required: true,
        description:"Email utilizado para gera token"
    })
    @IsNotEmpty({
        message: "Email é obrigatório."
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        type: "string",
        minLength: 6,
        example: "SuaSenh@123",
        required: true,
        description: "Senha de acesso para gera token"
    })
    @IsNotEmpty({
        message: "Senha é obrigatório"
    })
    @IsStrongPassword({
        minLength: 6
    })
    password: string;
}