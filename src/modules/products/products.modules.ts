import {Module} from "@nestjs/common";
import {FavoriteController} from "./applications/http/favorite.controller";
import {PRODUCTS_PROVIDER} from "./infra/providers/products.provider";
import {FavoriteUsecase} from "./usecases/favorite";


@Module({
    controllers: [FavoriteController],
    providers: [...PRODUCTS_PROVIDER, ...FavoriteUsecase],
    exports: []
})
export class ProductsModules {
}