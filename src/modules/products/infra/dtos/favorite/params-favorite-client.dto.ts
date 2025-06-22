import {IsNumberString} from "class-validator";


export class ParamsFavoriteClientDto {
    @IsNumberString({},{
        message: "ClientId aceita somente número."
    })
    clientId: number;
    @IsNumberString({},{
        message: "ProductId aceita somente número."
    })
    productId: number;
}