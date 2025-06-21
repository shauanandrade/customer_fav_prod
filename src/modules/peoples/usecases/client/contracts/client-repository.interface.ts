export interface IClientRepository {
    findAllClient(): Promise<any>;

    findByIdClient(id: number): Promise<any>;

    createClient(inputClient: any): Promise<any>;

    updateClient(id: number, inputClient: any): Promise<any>;

    deleteClient(id: number): Promise<any>;
}