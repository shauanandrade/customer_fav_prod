import {BadRequestException, Inject, NotFoundException} from "@nestjs/common";
import {IFavoriteRepository} from "./contracts/favorite-repository.interface";
import TOKEN_PRODUCTS from "../../infra/contantes/token-products.constants";
import {IProductFakestore} from "../../infra/external/contracts/product-fakestore.interface";
import {IFindByIdClient} from "./contracts/find-by-id-client.interface";
import {AddProductFavoriteClienteDto} from "../../infra/dtos/favorite/add-product-favorite-cliente.dto";


export class AddFavoriteClientUsecase {
    constructor(
        @Inject(TOKEN_PRODUCTS.favoriteRepository) private readonly repo: IFavoriteRepository,
        @Inject(TOKEN_PRODUCTS.productFakestore) private readonly productFakestore: IProductFakestore,
        @Inject("IFindByIdClient") private readonly findByIdClient: IFindByIdClient
    ) {
    }

    async execute(inputFavorite: AddProductFavoriteClienteDto) {
        try {

            const clientExist = await this.findByIdClient.execute(inputFavorite.clientId);

            if(!clientExist) {
                throw new NotFoundException("Cliente não cadastrado.")
            }

            const products = await this.productFakestore.getProductsId(inputFavorite.productId);

            if (!products) {
                throw new NotFoundException("Produto não foi encontrado.");
            }

            return await this.repo.addProductToClient(inputFavorite);
        } catch (err) {
            if (err instanceof NotFoundException) {
                throw err;
            }
            throw new BadRequestException(err.message);
        }
    }
}