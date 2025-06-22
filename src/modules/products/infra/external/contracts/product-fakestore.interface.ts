export interface IProductFakestore {
    getAllProducts(): Promise<any>

    getProductsId(id: string | number): Promise<any>
}