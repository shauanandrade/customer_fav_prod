import {FindAllClientUsecase} from "./find-all-client.usecase";
import {CreateClientUsecase} from "./create-client.usecase";
import {Provider} from "@nestjs/common";
import {FindByIdClientUsecase} from "./find-by-id-client.usecase";
import {UpdateClientUsecase} from "./update-client.usecase";
import {DeleteClientUsecase} from "./delete-client.usecase";

export {FindAllClientUsecase, CreateClientUsecase, FindByIdClientUsecase, UpdateClientUsecase, DeleteClientUsecase};

export const ClientUsecase: Provider[] = [
    FindAllClientUsecase,
    CreateClientUsecase,
    FindByIdClientUsecase,
    UpdateClientUsecase,
    DeleteClientUsecase,
]