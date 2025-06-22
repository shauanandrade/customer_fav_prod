import {BaseResponse} from "../../type/base-response.type";

export interface IBaseRepository {
    listAll(whereOptions?: any): Promise<BaseResponse[]>;

    listOne(whereOption: any): Promise<BaseResponse>;

    create(inputData: any): Promise<BaseResponse>;

    update(id: number, inputData: any): Promise<BaseResponse>;

    delete(whereOptions: any): Promise<BaseResponse>;

    exist(whereOptions: any): Promise<boolean>;
}