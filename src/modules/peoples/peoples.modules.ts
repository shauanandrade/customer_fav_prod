import {Module} from "@nestjs/common";
import {ClientController} from "./applications/http/client.controller";
import {PEOPLES_PROVIDER} from "./infra/providers/peoples.provider";
import {ClientUsecase} from "./usecases/client";
import {PEOPLES_CLIENTS_PROVIDERS} from "./infra/providers/client.provider";


@Module({
    controllers: [ClientController],
    providers: [...PEOPLES_PROVIDER, ...ClientUsecase,...PEOPLES_CLIENTS_PROVIDERS],
    exports: [...PEOPLES_PROVIDER,...PEOPLES_CLIENTS_PROVIDERS,...ClientUsecase]
})
export class PeoplesModule {
}