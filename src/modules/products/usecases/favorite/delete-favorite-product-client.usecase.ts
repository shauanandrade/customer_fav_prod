import {BadRequestException, HttpException, Inject} from "@nestjs/common";
import {IFavoriteRepository} from "./contracts/favorite-repository.interface";
import TOKEN_PRODUCTS from "../../infra/contantes/token-products.constants";
import {
    IDeleteFavoriteProductCliente
} from "../../../peoples/usecases/client/contracts/delete-favorite-product.interface";


export class DeleteFavoriteProductClientUsecase {
    constructor(
        @Inject(TOKEN_PRODUCTS.favoriteRepository) private readonly repo: IFavoriteRepository,
    ) {
    }

    async execute(clientId: string | number): Promise<any> {
        try {
            return await this.repo.deleteFavoriteProduct({
                customerId: Number(clientId),
            })
        } catch (err) {
            if (err instanceof HttpException) {
                throw err;
            }
            throw new BadRequestException(err.message);
        }
    }
}