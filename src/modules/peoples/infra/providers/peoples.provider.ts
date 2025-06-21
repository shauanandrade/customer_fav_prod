import {Provider} from "@nestjs/common";
import {ClientRepository} from "../repository/client.repository";
import TOKEN_PEOPLES from "../contantes/token-people.constants";
import {PrismaService} from "../../../../common/orms/prisma/prisma.service";
import createRepository from "../../../../common/orms/create-repository";


export const PEOPLES_PROVIDER: Provider[] = [
    createRepository(
        TOKEN_PEOPLES.clientRepository,
        (client: PrismaService) => client.customer,
        ClientRepository
    )

]