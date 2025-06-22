import {Provider} from "@nestjs/common";
import {FindByIdClientUsecase} from "../../usecases/client";
import TOKEN_PEOPLES from "../contantes/token-people.constants";


export const PEOPLES_CLIENTS_PROVIDERS: Provider[] = [
    {
        provide: "IFindByIdClient",
        useClass: FindByIdClientUsecase,
    }
]