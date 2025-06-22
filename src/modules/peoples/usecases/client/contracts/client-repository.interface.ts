import {BaseResponse} from "../../../../../common/type/base-response.type";

export interface IClientRepository {
    findAllClient(): Promise<BaseResponse>;

    findByIdClient(id: number): Promise<BaseResponse>;

    createClient(inputClient: any): Promise<BaseResponse>;

    updateClient(id: number, inputClient: any): Promise<BaseResponse>;

    deleteClient(id: number): Promise<void>;

    existClient(whereOptions: any): Promise<boolean>;
}