import {Module} from "@nestjs/common";
import {ProductsModule} from "./products/products.module";
import {PeoplesModule} from "./peoples/peoples.modules";
import {AuthenticationModule} from "./authentication/authentication.module";
import {JwtModule} from "@nestjs/jwt";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TOKEN_JWT} from "../common/constants/token-jwt.constants";
import {APP_GUARD} from "@nestjs/core";
import {AuthGuard} from "../common/guards/auth.guard";


@Module({
    imports: [
        PeoplesModule,
        ProductsModule,
        AuthenticationModule,
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
    providers: [
        {
            provide: APP_GUARD,
            useClass: AuthGuard,
        }
    ],
})
export class ModulesModule {}