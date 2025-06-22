import createRepository from "../../../../common/orms/create-repository";
import {Provider} from "@nestjs/common";
import TOKEN_AUTHENTICATION from "../contantes/token-authentication.constants";
import {PrismaService} from "../../../../common/orms/prisma/prisma.service";
import {AuthRepository} from "../repository/auth.repository";
import {JwtProvider} from "../../../../common/providers/jwt.provider";


export const AUTHENTICATION_PROVIDER: Provider[] = [
    createRepository(
        TOKEN_AUTHENTICATION.authenticationClientRepository,
        (client: PrismaService) => client.customer,
        AuthRepository
    ),
    ...JwtProvider
]