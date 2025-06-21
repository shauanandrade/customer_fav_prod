export interface IBaseRepository {
    listAll(): Promise<any>;

    listById(id: number): Promise<any>;

    create(inputData: any): Promise<any>;

    update(id: number, inputData: any): Promise<any>;

    delete(id: number): Promise<any>;
}