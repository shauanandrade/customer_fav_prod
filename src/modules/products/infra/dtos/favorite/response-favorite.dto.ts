import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class ResponseFavoriteDto{
    @ApiProperty({example: "1"})
    @Expose()
    id: number;

    @ApiProperty({example: "1"})
    @Expose()
    customerId: number;

    @ApiProperty({example: "1"})
    @Expose()
    productId: number;

    @ApiProperty({example: "2025-06-22T18:00:01.720Z"})
    @Expose()
    createdAt: Date;

}