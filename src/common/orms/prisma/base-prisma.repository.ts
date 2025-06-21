import {IBaseRepository} from "../contracts/base-repository.interfaces";
import {PrismaService} from "./prisma.service";
import {Injectable, Logger} from "@nestjs/common";
import {BaseResponse} from "../../type/base-response.type";

@Injectable()
export class BasePrismaRepository implements IBaseRepository {
    public model: PrismaService | any;

    async listAll(): Promise<BaseResponse[]> {
        try {
            return this.model.findMany();
        } catch (err) {
            throw new Error('Erro methodo',{cause: err})
        }
    }

    async listById(id: number): Promise<BaseResponse> {
        try {
            return this.model.findFirst({
                where: {
                    id: id
                }
            }) as BaseResponse;
        } catch (err) {
            Logger.error({
                method:"listById",
                message: err.message,
            },{cause: err})
            throw new Error('Error findFirst',{cause: err})
        }
    }

    async create(inputData: any): Promise<any> {
        try {
            return this.model.create({data: inputData});
        }catch(err) {
            Logger.error({
                method:"listById",
                message: err.message,
            },{cause: err})
            throw new Error('Error creation',{cause: err})
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
        }catch(err){
            Logger.error({
                method:"update",
                message: err.message,
            },{cause: err})
            throw new Error('Error update',{cause: err})
        }
    }

    async delete(id: number): Promise<BaseResponse> {
        try {
            return this.model.delete({
                where: {
                    id: id
                }
            });
        }catch (err){
            Logger.error({
                method:"delete",
                message: err.message,
            },{cause: err})
            throw new Error('Error delete',{cause: err})
        }
    }

}