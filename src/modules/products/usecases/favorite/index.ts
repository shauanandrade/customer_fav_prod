import {Provider} from "@nestjs/common";
import {AddFavoriteClientUsecase} from "./add-favorite-client.usecase";
import {GetAllFavoriteByClientUsecase} from "./get-all-favorite-by-client.usecase";
import {DeleteFavoriteProductUsecase} from "./delete-favorite-product.usecase";
import {GetAllProductsUsecase} from "./get-all-products.usecase";
import {DeleteFavoriteProductClientUsecase} from "./delete-favorite-product-client.usecase";

export {
    AddFavoriteClientUsecase,
    GetAllFavoriteByClientUsecase,
    DeleteFavoriteProductUsecase,
    GetAllProductsUsecase,
    DeleteFavoriteProductClientUsecase
};

export const FavoriteUsecase: Provider[] = [
    AddFavoriteClientUsecase,
    GetAllFavoriteByClientUsecase,
    DeleteFavoriteProductUsecase,
    DeleteFavoriteProductClientUsecase,
    GetAllProductsUsecase,
]