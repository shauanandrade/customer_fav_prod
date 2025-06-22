import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
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
        ModulesModule
    ],
})
export class AppModule {
}
