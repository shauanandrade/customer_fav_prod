import {BadRequestException, Inject} from "@nestjs/common";
import {IFavoriteRepository} from "./contracts/favorite-repository.interface";
import TOKEN_PRODUCTS from "../../infra/contantes/token-products.constants";


export class DeleteFavoriteProductUsecase {
    constructor(
        @Inject(TOKEN_PRODUCTS.favoriteRepository) private readonly repo: IFavoriteRepository,
    ) {
    }

    async execute(clientId: string|number,productId: string|number): Promise<any> {
        try {
            return await this.repo.deleteFavoriteProduct(Number(clientId), Number(productId))
        }catch (err){
            throw new BadRequestException(err.message);
        }
    }
}