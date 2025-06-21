import {Module} from "@nestjs/common";
import {PeoplesModule} from "./peoples/peoples.modules";


@Module({
    imports: [
        PeoplesModule
    ]
})
export class ModulesModule {}