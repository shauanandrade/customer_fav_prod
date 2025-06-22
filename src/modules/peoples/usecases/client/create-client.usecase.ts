import {BadRequestException, ConflictException, HttpException, Inject} from "@nestjs/common";
import TOKEN_PEOPLES from "../../infra/contantes/token-people.constants";
import {IClientRepository} from "./contracts/client-repository.interface";
import {AddProductFavoriteClienteDto} from "../../../products/infra/dtos/favorite/add-product-favorite-cliente.dto";
import {Password} from "../../../../common/value-objects/password.vo";
import {plainToInstance} from "class-transformer";
import {ResponseClientsDto} from "../../infra/dtos/client/response-clients.dto";
import {CreateInputClientDto} from "../../infra/dtos/client/create-input-client.dto";


export class CreateClientUsecase {
    constructor(
        @Inject(TOKEN_PEOPLES.clientRepository) private readonly repo: IClientRepository,
    ) {
    }

    async execute(inputClient: CreateInputClientDto) {
        try {
            const existEmail = await this.repo.existClient({
                email: inputClient.email,
            });

            if (existEmail) {
                throw new ConflictException('Email já cadastrado');
            }

            const password = await new Password(inputClient.password).create();

            inputClient.password = password.getValue();

            const createCliente = await this.repo.createClient(inputClient);

            return plainToInstance(ResponseClientsDto, createCliente, {
                excludeExtraneousValues: true,
            });
        } catch (err) {
            if (err instanceof HttpException) {
                throw err;
            }
            throw new BadRequestException(err.message);
        }
    }
}