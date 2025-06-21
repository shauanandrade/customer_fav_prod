import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {AuthController} from "./modules/authentication/auth/auth.controller";
import {JwtModule} from "@nestjs/jwt";
import {TOKEN_JWT} from "./common/constants/token-jwt.constants";
import {JwtProvider} from "./common/providers/jwt.provider";
import {AuthGuard} from "./common/guards/auth.guard";
import {APP_GUARD} from "@nestjs/core";
import {OrmModule} from "./common/orms/orm.module";
import {ModulesModule} from "./modules/modules.module";


@Module({
    imports: [
        OrmModule,
        ConfigModule.forRoot({
            isGlobal: true,
        }),
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
        ModulesModule
    ],
    controllers: [AuthController],
    providers: [
        ...JwtProvider,
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        }
    ],
})
export class AppModule {
}
