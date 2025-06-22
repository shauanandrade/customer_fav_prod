export interface IFindByIdClient {
    execute(id: number | string): Promise<any>
}
