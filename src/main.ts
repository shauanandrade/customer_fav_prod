import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {Logger, LoggerService} from "@nestjs/common";
import * as process from "node:process";
import {ConfigService} from "@nestjs/config";
import {DocumentConfig} from "./common/shared/docs";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const logs: LoggerService = new Logger("Bootstrap");

    DocumentConfig.bootstrap(app);

    const port = process.env.APP_PORT ?? 3000;

    await app.listen(port, () => {
        logs.log(`Server is running on http://localhost:${port}`)
    });
}


bootstrap();
