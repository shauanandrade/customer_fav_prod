import {BadRequestException, HttpException, Inject} from "@nestjs/common";
import TOKEN_PEOPLES from "../../infra/contantes/token-people.constants";
import {IClientRepository} from "./contracts/client-repository.interface";
import {ResponseClientsDto} from "../../infra/dtos/client/response-clients.dto";
import {plainToInstance} from "class-transformer";


export class FindAllClientUsecase {
    constructor(
        @Inject(TOKEN_PEOPLES.clientRepository) private readonly repo: IClientRepository,
    ) {
    }

    async execute(): Promise<ResponseClientsDto> {
        try {
            const result = await this.repo.findAllClient();
            return plainToInstance(ResponseClientsDto,result,{
                excludeExtraneousValues: true
            })
        }catch (err){
            if(err instanceof HttpException) {
                throw err;
            }
            throw new BadRequestException(err.message);
        }
    }
}