import {BadRequestException, Inject, NotFoundException} from "@nestjs/common";
import {IFavoriteRepository} from "./contracts/favorite-repository.interface";
import TOKEN_PRODUCTS from "../../infra/contantes/token-products.constants";
import {IProductFakestore} from "../../infra/external/contracts/product-fakestore.interface";


export class GetAllProductsUsecase {
    constructor(
        @Inject(TOKEN_PRODUCTS.productFakestore) private readonly productFakestore: IProductFakestore
    ) {
    }

    async execute(id?: string | number): Promise<any> {
        try {
            return await this.productFakestore.getProductsId(Number(id))
        } catch (err) {
            if (err instanceof NotFoundException) {
                throw err
            }
            throw new BadRequestException(err.message);
        }
    }
}