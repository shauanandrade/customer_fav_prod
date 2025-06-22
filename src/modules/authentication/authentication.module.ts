import {Module} from "@nestjs/common";
import {AuthController} from "./applications/http/auth.controller";
import {AuthUsecase} from "./usecases/auth";
import {AUTHENTICATION_PROVIDER} from "./infra/providers/authentication.provider";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TOKEN_JWT} from "../../common/constants/token-jwt.constants";

@Module({
    imports:[
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (config: ConfigService) => ({
                global: true,
                secret: TOKEN_JWT.secret(config),
                signOptions: {
                    algorithm: 'HS256',
                    expiresIn: TOKEN_JWT.expires(config)
                }
            })
        }),
    ],
    controllers: [AuthController],
    providers: [...AUTHENTICATION_PROVIDER, ...AuthUsecase],
    exports: [...AuthUsecase],
})
export class AuthenticationModule {
}
