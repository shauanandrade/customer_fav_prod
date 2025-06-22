import {Inject, Injectable, NotFoundException} from "@nestjs/common";
import TOKEN_PEOPLES from "../../infra/contantes/token-people.constants";
import {IClientRepository} from "./contracts/client-repository.interface";
import {IFindByIdClient} from "./contracts/find-by-id-client.interface";


export class FindByIdClientUsecase implements IFindByIdClient {
    constructor(
        @Inject(TOKEN_PEOPLES.clientRepository) private readonly repo: IClientRepository,
    ) {
    }

    async execute(id: number | string): Promise<any> {
        try {
            const result = await this.repo.findByIdClient(Number(id));
            if(!result) {
                throw new NotFoundException("O Cliente não foi encontrado.");
            }
            return result;
        }catch (err) {
            if(err instanceof NotFoundException) {
                throw err;
            }
            throw err;
        }
    }
}