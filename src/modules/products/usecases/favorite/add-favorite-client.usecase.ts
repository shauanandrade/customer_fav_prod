import {BadRequestException, Inject} from "@nestjs/common";
import {IFavoriteRepository} from "./contracts/favorite-repository.interface";
import TOKEN_PRODUCTS from "../../infra/contantes/token-products.constants";


export class AddFavoriteClientUsecase {
    constructor(
        @Inject(TOKEN_PRODUCTS.favoriteRepository) private readonly repo: IFavoriteRepository,
    ) {
    }

    async execute(inputFavorite:any) {
        try {
            return await this.repo.addProductToClient(inputFavorite)
        }catch (err) {
            throw new BadRequestException(err.message);
        }
    }
}