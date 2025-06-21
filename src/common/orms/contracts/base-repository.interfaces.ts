export interface IBaseRepository {
    listAll(whereOptions?: any): Promise<any>;

    listById(id: number): Promise<any>;

    create(inputData: any): Promise<any>;

    update(id: number, inputData: any): Promise<any>;

    delete(whereOptions: any): Promise<any>;

    exist(whereOptions: any): Promise<boolean>;
}