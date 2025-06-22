import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

class Rating{
    @ApiProperty({example: "1"})
    @Expose()
    rate: number;

    @ApiProperty({example: "1"})
    @Expose()
    count: number;
}

export class ResponseFavoriteItensDto{
    @ApiProperty({example: "1"})
    @Expose()
    id: number;

    @ApiProperty({example: "Nome do produto"})
    @Expose()
    title: string;

    @ApiProperty({example: "imagem.jpg"})
    @Expose()
    image?: string;

    @ApiProperty({example: "1.50"})
    @Expose()
    price: number;

    @ApiProperty({type:Rating})
    @Expose()
    rating?: Rating;

}