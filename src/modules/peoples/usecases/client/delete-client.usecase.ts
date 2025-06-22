import {BadRequestException, HttpException, Inject, NotFoundException} from "@nestjs/common";
import TOKEN_PEOPLES from "../../infra/contantes/token-people.constants";
import {IClientRepository} from "./contracts/client-repository.interface";
import {
    IDeleteFavoriteProductCliente
} from "./contracts/delete-favorite-product.interface";


export class DeleteClientUsecase {
    constructor(
        @Inject(TOKEN_PEOPLES.clientRepository) private readonly repo: IClientRepository,
        @Inject("IDeleteFavoriteProductCliente") private readonly deleteFavoriteProductCliente: IDeleteFavoriteProductCliente,
    ) {
    }

    async execute(id: string | number): Promise<void> {
        try {
            const exist = await this.repo.existClient({
                id: Number(id)
            });

            if (!exist) {
                throw new NotFoundException('Cliente não existe');
            }

            await this.deleteFavoriteProductCliente.execute(Number(id));

            await this.repo.deleteClient(Number(id));
        }catch (err){
            if(err instanceof HttpException) {
                throw err;
            }
            throw new BadRequestException(err.message);
        }
    }
}