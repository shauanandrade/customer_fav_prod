import {Global, Module} from "@nestjs/common";
import {PrismaService} from "./prisma/prisma.service";
import {ORM_PROVIDERS} from "../providers/orm.provider";

@Global()
@Module({
    providers: [PrismaService, ORM_PROVIDERS],
    exports: [PrismaService, ORM_PROVIDERS],
})
export class OrmModule {
}