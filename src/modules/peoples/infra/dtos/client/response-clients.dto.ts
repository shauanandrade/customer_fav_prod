import {Exclude, Expose} from "class-transformer";
import {ApiProperty, ApiResponse} from "@nestjs/swagger";


export class ResponseClientsDto {
    @ApiProperty({example: "1", description: "Cliente ID",required: false})
    @Expose()
    id: number;
    @ApiProperty({example: "NOME CLIENTE", description: "Cliente ID"})
    @Expose()
    name: string;
    @ApiProperty({example: "cliente@email.com", description: "Cliente ID"})
    @Expose()
    email: string;
    @Exclude()
    password: string;
    @ApiProperty({example: "2025-06-21T03:35:39.548Z", description: "Data de Criação do registro",required: false})
    @Expose()
    createdAt: Date;
    @ApiProperty({example: "2025-06-21T03:35:39.548Z", description: "Data de Modificação do registro",required: false})
    @Expose()
    updatedAt: Date;
}