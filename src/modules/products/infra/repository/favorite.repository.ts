import {IFavoriteRepository} from "../../usecases/favorite/contracts/favorite-repository.interface";
import {IBaseRepository} from "../../../../common/orms/contracts/base-repository.interfaces";
import {BaseResponse} from "../../../../common/type/base-response.type";


export class FavoriteRepository implements IFavoriteRepository {

    constructor(
        private readonly repository: IBaseRepository,
    ) {
    }

    async addProductToClient(inputFavorite: any): Promise<any> {
        try {
            const existProduct = await this.repository.exist({
                where: {
                    productId: inputFavorite.productId,
                    customerId: inputFavorite.clientId,
                }
            });

            if (existProduct) {
                throw new Error("Produto já existe para este cliente.");
            }

            return this.repository.create({
                customerId: inputFavorite.clientId,
                productId: inputFavorite.productId,
            })
        } catch (err) {
            throw new Error(err);
        }
    }

    async favoriteByClientId(clientId: number): Promise<BaseResponse[]> {
        try {
            return await this.repository.listAll({
                where: {
                    customerId: clientId
                }
            });
        } catch (err) {
            throw new Error(err);
        }

    }

    async deleteFavoriteProduct(whereOption:any): Promise<void> {
        try {
            const existProduct = await this.repository.exist({
                where: whereOption
            });

            if (!existProduct) {
                throw new Error("Produto não foi encontrado para o cliente.");
            }

            await this.repository.delete({
                where: whereOption
            })
        } catch (err) {
            throw new Error(err.message);
        }
    }
}