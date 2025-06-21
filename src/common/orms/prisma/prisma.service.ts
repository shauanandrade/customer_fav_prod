import {PrismaClient} from "../../../../generated/prisma";
import {OnModuleInit} from "@nestjs/common";


export class PrismaService extends PrismaClient implements OnModuleInit{
    async onModuleInit() {
        await this.$connect()
    }

}