import {BaseJwt} from "../shared/base-jwt";
import {TOKEN} from "../constants/tokens.constants";

export const JwtProvider = [
    {
        provide: TOKEN.BASEJWT,
        useClass: BaseJwt
    }
]