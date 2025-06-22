import {Provider} from "@nestjs/common";
import {FavoriteRepository} from "../repository/favorite.repository";
import {PrismaService} from "../../../../common/orms/prisma/prisma.service";
import createRepository from "../../../../common/orms/create-repository";
import TOKEN_PRODUCTS from "../contantes/token-products.constants";
import {ProductFakestoreExternal} from "../external/product-fakestore.external";


export const PRODUCTS_PROVIDER: Provider[] = [
    createRepository(
        TOKEN_PRODUCTS.favoriteRepository,
        (client: PrismaService) => client.favorite,
        FavoriteRepository
    ),
    {
        provide: TOKEN_PRODUCTS.productFakestore,
        useClass: ProductFakestoreExternal
    }
]