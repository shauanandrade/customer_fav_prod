import {BadRequestException, HttpException, Inject, NotFoundException} from "@nestjs/common";
import TOKEN_PEOPLES from "../../infra/contantes/token-people.constants";
import {IClientRepository} from "./contracts/client-repository.interface";
import {UpdateInputClientDto} from "../../infra/dtos/client/update-input-client.dto";
import {ResponseClientsDto} from "../../infra/dtos/client/response-clients.dto";
import {plainToInstance} from "class-transformer";


export class UpdateClientUsecase {
    constructor(
        @Inject(TOKEN_PEOPLES.clientRepository) private readonly repo: IClientRepository,
    ) {
    }

    async execute(id: string | number, inputClient: UpdateInputClientDto): Promise<ResponseClientsDto> {
        try {
            const exist = await this.repo.existClient({
                id: Number(id)
            });

            if (!exist) {
                throw new NotFoundException('Cliente não existe');
            }

            const result = await this.repo.updateClient(Number(id), inputClient);

            return plainToInstance(ResponseClientsDto, result, {
                excludeExtraneousValues: true
            })
        } catch (err) {
            if(err instanceof HttpException) {
                throw err;
            }
            throw new BadRequestException(err.message);
        }
    }
}