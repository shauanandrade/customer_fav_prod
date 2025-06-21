import {PrismaService} from "./prisma/prisma.service";
import {BasePrismaRepository} from "./prisma/base-prisma.repository";

function createRepository(
    token: symbol | string,
    dbModel: (model: PrismaService) => any,
    repositoryClass: new (repo: any) => any,
) {
    return {
        provide: token,
        inject: [PrismaService],
        useFactory: (prisma: PrismaService) => {
            const repo = new BasePrismaRepository();
            repo.model = dbModel(prisma);
            return new repositoryClass(repo);
        },
    }
}

export default createRepository;