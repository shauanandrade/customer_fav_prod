import {Module} from "@nestjs/common";
import {FavoriteController} from "./applications/http/favorite.controller";
import {PRODUCTS_PROVIDER} from "./infra/providers/products.provider";
import {FavoriteUsecase} from "./usecases/favorite";
import {HttpModule} from "@nestjs/axios";
import {PeoplesModule} from "../peoples/peoples.modules";

@Module({
    imports: [PeoplesModule,HttpModule],
    controllers: [FavoriteController],
    providers: [...PRODUCTS_PROVIDER, ...FavoriteUsecase],
    exports: []
})
export class ProductsModule {
}
