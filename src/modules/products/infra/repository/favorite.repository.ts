import {IFavoriteRepository} from "../../usecases/favorite/contracts/favorite-repository.interface";
import {IBaseRepository} from "../../../../common/orms/contracts/base-repository.interfaces";


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

    async favoriteByClientId(clientId: number): Promise<any> {
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

    async deleteFavoriteProduct(clientId: number, productId: number): Promise<any> {
        try {
            const existProduct = await this.repository.exist({
                where: {
                    productId: clientId,
                    customerId: productId,
                }
            });

            if (!existProduct) {
                throw new Error("Produto não foi encontrado para o cliente.");
            }

            return this.repository.delete({
                where: {
                    customerId_productId: {
                        customerId: clientId,
                        productId: productId
                    }
                }
            })
        } catch (err) {
            throw new Error(err.message);
        }
    }
}