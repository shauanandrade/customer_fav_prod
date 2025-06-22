import {BadRequestException, HttpException, Inject} from "@nestjs/common";
import TOKEN_PEOPLES from "../../infra/contantes/token-people.constants";
import {IClientRepository} from "./contracts/client-repository.interface";


export class DeleteClientUsecase {
    constructor(
        @Inject(TOKEN_PEOPLES.clientRepository) private readonly repo: IClientRepository,
    ) {
    }

    execute(id: string | number) {
        try {
            return this.repo.deleteClient(Number(id));
        }catch (err){
            if(err instanceof HttpException) {
                throw err;
            }
            throw new BadRequestException(err.message);
        }
    }
}