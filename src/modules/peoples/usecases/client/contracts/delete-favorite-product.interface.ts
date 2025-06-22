

export interface IDeleteFavoriteProductCliente{
    execute(clientId: string|number): Promise<void>;
}