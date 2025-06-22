import {Provider} from "@nestjs/common";
import {AddFavoriteClientUsecase} from "./add-favorite-client.usecase";
import {GetAllFavoriteClientUsecase} from "./get-all-favorite-client.usecase";
import {DeleteFavoriteProductUsecase} from "./delete-favorite-product.usecase";
import {GetAllProductsUsecase} from "./get-all-products.usecase";

export {AddFavoriteClientUsecase, GetAllFavoriteClientUsecase, DeleteFavoriteProductUsecase, GetAllProductsUsecase};

export const FavoriteUsecase: Provider[] = [
    AddFavoriteClientUsecase,
    GetAllFavoriteClientUsecase,
    DeleteFavoriteProductUsecase,
    GetAllProductsUsecase,
]