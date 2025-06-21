export interface IFavoriteRepository {
    favoriteByClientId(id: number): Promise<any>;

    addProductToClient(inputFavorite: any): Promise<any>;

    deleteFavoriteProduct(clientId: number,productId: number): Promise<any>;
}