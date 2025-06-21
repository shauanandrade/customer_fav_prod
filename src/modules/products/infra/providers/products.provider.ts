import {Provider} from "@nestjs/common";
import {FavoriteRepository} from "../repository/favorite.repository";
import TOKEN_PEOPLES from "../contantes/token-products.constants";
import {PrismaService} from "../../../../common/orms/prisma/prisma.service";
import createRepository from "../../../../common/orms/create-repository";
import TOKEN_PRODUCTS from "../contantes/token-products.constants";


export const PRODUCTS_PROVIDER: Provider[] = [
    createRepository(
        TOKEN_PRODUCTS.favoriteRepository,
        (client: PrismaService) => client.favorite,
        FavoriteRepository
    )

]