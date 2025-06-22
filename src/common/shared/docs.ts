import {INestApplication} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import * as fs from "node:fs";
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
            .addBearerAuth({
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                    in: 'header'
                },
                'accessToken'
            )
            .build();
    }

    static generateFile(app: INestApplication){
// Após gerar o documento Swagger
        const document = SwaggerModule.createDocument(app, this.config())

// Salva o JSON no diretório do projeto
        fs.writeFileSync('./swagger.json', JSON.stringify(document, null, 2));

    }
}