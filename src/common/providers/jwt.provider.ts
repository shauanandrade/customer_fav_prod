import {BaseJwt} from "../shared/base-jwt";
import {TOKEN} from "../constants/tokens.constants";
import {Provider} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";

export const JwtProvider: Provider[] = [
    {
        provide: TOKEN.BASEJWT,
        useClass: BaseJwt
    }
]