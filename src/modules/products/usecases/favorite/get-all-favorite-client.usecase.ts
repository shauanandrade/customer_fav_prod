import {BadRequestException, Inject, NotFoundException} from "@nestjs/common";
import {IFavoriteRepository} from "./contracts/favorite-repository.interface";
import TOKEN_PRODUCTS from "../../infra/contantes/token-products.constants";


export class GetAllFavoriteClientUsecase {
    constructor(
        @Inject(TOKEN_PRODUCTS.favoriteRepository) private readonly repo: IFavoriteRepository,
    ) {
    }

    async execute(clientId:any) {
        try {
            const result = await this.repo.favoriteByClientId(Number(clientId));

            if(result.length === 0){
                throw new NotFoundException("Nenhum produto encontrado para este cliente")
            }
            return result;
        }catch (err) {
            if(err instanceof NotFoundException){
                throw err
            }
            throw new BadRequestException(err.message);
        }
    }
}