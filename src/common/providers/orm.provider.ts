import {Provider} from "@nestjs/common";
import {TOKEN} from "../constants/tokens.constants";
import {BasePrismaRepository} from "../orms/prisma/base-prisma.repository";


export const ORM_PROVIDERS: Provider = {
    provide: TOKEN.BASE_REPOSITORY,
    useClass: BasePrismaRepository
}