import {Module} from "@nestjs/common";
import {ClientController} from "./applications/http/client.controller";
import {PEOPLES_PROVIDER} from "./infra/providers/peoples.provider";
import {ClientUsecase} from "./usecases/client";


@Module({
    controllers: [ClientController],
    providers: [...PEOPLES_PROVIDER, ...ClientUsecase],
    exports: []
})
export class PeoplesModule {
}