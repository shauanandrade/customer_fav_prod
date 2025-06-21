import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger, LoggerService} from "@nestjs/common";
import * as process from "node:process";
import {DocumentConfig} from "./common/shared/docs";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // app.useGlobalGuards();
    const logs: LoggerService = new Logger("Bootstrap");

    DocumentConfig.bootstrap(app);

    const port = process.env.APP_PORT ?? 3000;

    await app.listen(port, () => {
        logs.log(`Server is running on http://localhost:${port}`)
    });
}


bootstrap();
