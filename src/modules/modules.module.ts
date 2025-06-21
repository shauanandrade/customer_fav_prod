import {Module} from "@nestjs/common";
import {PeoplesModule} from "./peoples/peoples.modules";
import {ProductsModules} from "./products/products.modules";


@Module({
    imports: [
        PeoplesModule,
        ProductsModules
    ]
})
export class ModulesModule {}