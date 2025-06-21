import {Provider} from "@nestjs/common";
import {AddFavoriteClientUsecase} from "./add-favorite-client.usecase";
import {GetAllFavoriteClientUsecase} from "./get-all-favorite-client.usecase";
import {DeleteFavoriteProductUsecase} from "./delete-favorite-product.usecase";

export {AddFavoriteClientUsecase, GetAllFavoriteClientUsecase, DeleteFavoriteProductUsecase};

export const FavoriteUsecase: Provider[] = [
    AddFavoriteClientUsecase,
    GetAllFavoriteClientUsecase,
    DeleteFavoriteProductUsecase,
]