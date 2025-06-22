import {IClientRepository} from "../../usecases/client/contracts/client-repository.interface";
import {IBaseRepository} from "../../../../common/orms/contracts/base-repository.interfaces";
import {BaseResponse} from "../../../../common/type/base-response.type";


export class ClientRepository implements IClientRepository {

    constructor(
        private readonly repository: IBaseRepository,
    ) {
    }

    findByIdClient(id: number): Promise<any> {
        return this.repository.listOne({
            where: {
                id: Number(id)
            }
        })
    }

    updateClient(id: number, inputClient: any): Promise<any> {
        return this.repository.update(id, inputClient);
    }

    async deleteClient(id: number): Promise<any> {
        try {
            const resultCliente = await this.findByIdClient(id);
            if (!resultCliente) {
                throw new Error(`Could not find client with id ${id}`);
            }
            await this.repository.delete({
                where: {
                    id: Number(id),
                }
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async findAllClient(): Promise<BaseResponse[]> {
        return this.repository.listAll();
    }

    createClient(inputClient: any): Promise<BaseResponse> {
        return this.repository.create(inputClient);
    }
}