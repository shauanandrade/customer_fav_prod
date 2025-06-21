import {Inject} from "@nestjs/common";
import TOKEN_PEOPLES from "../../infra/contantes/token-people.constants";
import {IClientRepository} from "./contracts/client-repository.interface";


export class UpdateClientUsecase {
    constructor(
        @Inject(TOKEN_PEOPLES.clientRepository) private readonly repo: IClientRepository,
    ) {
    }

    execute(id: string | number, inputClient: any) {
        return this.repo.updateClient(Number(id), inputClient);
    }
}