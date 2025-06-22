import {BadRequestException, Inject, Injectable, NotFoundException} from "@nestjs/common";
import TOKEN_PEOPLES from "../../infra/contantes/token-people.constants";
import {IClientRepository} from "./contracts/client-repository.interface";
import {IFindByIdClient} from "../../../products/usecases/favorite/contracts/find-by-id-client.interface";
import {plainToInstance} from "class-transformer";
import {ResponseClientsDto} from "../../infra/dtos/client/response-clients.dto";


export class FindByIdClientUsecase {
    constructor(
        @Inject(TOKEN_PEOPLES.clientRepository) private readonly repo: IClientRepository,
    ) {
    }

    async execute(id: number | string): Promise<ResponseClientsDto> {
        try {
            const result = await this.repo.findByIdClient(Number(id));
            if(!result) {
                throw new NotFoundException("O Cliente não foi encontrado.");
            }
            return plainToInstance(ResponseClientsDto,result);
        }catch (err) {
            if(err instanceof NotFoundException) {
                throw err;
            }
            throw new BadRequestException(err.message);
        }
    }
}