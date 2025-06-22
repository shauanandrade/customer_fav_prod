import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty, IsNumber, IsStrongPassword} from "class-validator";


export class AddProductFavoriteClienteDto {
    @ApiProperty({
        type: "number",
        required: true,
        example: 1,
        description:"Nome do cliente"
    })
    @IsNotEmpty({
        message: "Nome é obrigatório."
    })
    @IsNumber({},{
        message: "Aceita somente número"
    })
    clientId: number;

    @ApiProperty({
        type: "number",
        required: true,
        example: 1,
        description:"ID do produto"
    })
    @IsNotEmpty({
        message: "Informe o id do produto."
    })
    @IsNumber({},{
        message: "Aceita somente número"
    })
    productId: number;
}