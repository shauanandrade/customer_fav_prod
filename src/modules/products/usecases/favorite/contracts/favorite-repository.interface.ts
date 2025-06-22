import {BaseResponse} from "../../../../../common/type/base-response.type";

export interface IFavoriteRepository {
    favoriteByClientId(id: number): Promise<BaseResponse[]>;

    addProductToClient(inputFavorite: any): Promise<BaseResponse>;

    deleteFavoriteProduct(whereOption: any): Promise<void>;
}