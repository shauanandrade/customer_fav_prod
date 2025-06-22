import {IBaseRepository} from "../contracts/base-repository.interfaces";
import {PrismaService} from "./prisma.service";
import {Injectable, Logger} from "@nestjs/common";
import {BaseResponse} from "../../type/base-response.type";

@Injectable()
export class BasePrismaRepository implements IBaseRepository {
    public model: PrismaService | any;

    async listAll(whereOptions?: any): Promise<BaseResponse[]> {
        try {
            const whereOption = whereOptions || {};
            return await this.model.findMany(whereOption);
        } catch (err) {
            throw new Error('Erro methodo', {cause: err})
        }
    }

    async listOne(whereOptions: any): Promise<BaseResponse> {
        try {
            return this.model.findFirst(whereOptions) as BaseResponse;
        } catch (err) {
            Logger.error({
                method: "listById",
                message: err.message,
            }, {cause: err})
            throw new Error('Error findFirst', {cause: err})
        }
    }

    async create(inputData: any): Promise<any> {
        try {
            return this.model.create({data: inputData});
        } catch (err) {
            Logger.error({
                method: "listById",
                message: err.message,
            }, {cause: err})
            throw new Error('Error creation', {cause: err})
        }
    }

    async update(id: number, inputData: any): Promise<BaseResponse> {
        try {
            return this.model.update({
                where: {
                    id: id
                },
                data: inputData
            });
        } catch (err) {
            Logger.error({
                method: "update",
                message: err.message,
            }, {cause: err})
            throw new Error('Error update', {cause: err})
        }
    }

    async delete(whereOptions: any): Promise<BaseResponse> {
        try {
            if (!whereOptions) {
                throw new Error('Params is invalid')
            }
            return this.model.deleteMany(whereOptions);
        } catch (err) {
            Logger.error({
                method: "delete",
                message: err.message,
            }, {cause: err})
            throw new Error('Error delete', {cause: err})
        }
    }

    async exist(whereOptions?: any): Promise<boolean> {
        try {
            const result = await this.model.findFirst(whereOptions);
            return !!result;
        } catch (err) {
            Logger.error({
                method: "delete",
                message: err.message,
            }, {cause: err})

            throw new Error('Error delete', {cause: err})
        }
    }

}