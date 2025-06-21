import {JwtEnum} from "../enums/jwt.enum";
import {ConfigService} from "@nestjs/config";

export const TOKEN_JWT = {
    secret: (config:ConfigService)=>config.get<string>(JwtEnum.SECRET),
    expires: (config:ConfigService)=>config.get<string>(JwtEnum.EXPIRES) || '60M',
}