import {INestApplication} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

export class DocumentConfig {
    private static path: string = 'docs'
    private static docsConfig: Record<string, any> = {
        title: 'Customer Favorites Products',
        description: 'This is a custom favourite product',
        version: '1.0',
    };

    static bootstrap(app: INestApplication) {
        SwaggerModule.setup(this.path, app, () => SwaggerModule.createDocument(app, this.config()));
    }

    private static config() {
        return new DocumentBuilder()
            .setTitle(this.docsConfig.title)
            .setDescription(this.docsConfig.description)
            .setVersion(this.docsConfig.version)
            .build();
    }
}