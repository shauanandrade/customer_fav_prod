import {BadRequestException, HttpException, Inject, NotFoundException} from "@nestjs/common";
import {IFavoriteRepository} from "./contracts/favorite-repository.interface";
import TOKEN_PRODUCTS from "../../infra/contantes/token-products.constants";
import {IFindByIdClient} from "./contracts/find-by-id-client.interface";
import {GetAllProductsUsecase} from "./get-all-products.usecase";
import {ResponseFavoriteDto} from "../../infra/dtos/favorite/response-favorite.dto";
import {plainToInstance} from "class-transformer";
import {ResponseFavoriteItensDto} from "../../infra/dtos/favorite/response-favorite-itens.dto";


export class GetAllFavoriteByClientUsecase {
    constructor(
        @Inject(TOKEN_PRODUCTS.favoriteRepository) private readonly repo: IFavoriteRepository,
        @Inject("IFindByIdClient") private readonly findByIdClient: IFindByIdClient,
        private readonly getAllProductsUsecase: GetAllProductsUsecase
    ) {
    }

    async execute(clientId: any): Promise<any> {
        try {
            const clientExist = await this.findByIdClient.execute(clientId);

            if (!clientExist) {
                throw new NotFoundException("Cliente não cadastrado.")
            }
            const result = await this.repo.favoriteByClientId(Number(clientId));

            if (!result) {
                throw new NotFoundException("Nenhum produto encontrado para este cliente")
            }
            const products = plainToInstance(ResponseFavoriteDto, result);

            let response: ResponseFavoriteItensDto[] = await Promise.all(
                products.map(async (product) => this.getAllProductsUsecase.execute(product.productId))
            );

            return plainToInstance(ResponseFavoriteItensDto, response,{
                excludeExtraneousValues: true
            });

        } catch (err) {
            if (err instanceof HttpException) {
                throw err
            }
            throw new BadRequestException(err.message);
        }
    }
}