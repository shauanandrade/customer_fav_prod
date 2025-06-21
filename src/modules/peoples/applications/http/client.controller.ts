import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {
    CreateClientUsecase, DeleteClientUsecase,
    FindAllClientUsecase,
    FindByIdClientUsecase,
    UpdateClientUsecase
} from "../../usecases/client";
import {IsPublic} from "../../../../common/decorator/public.decorator";

@IsPublic()
@Controller('peoples/client')
export class ClientController {

    constructor(
        private readonly findAllClientUsecase: FindAllClientUsecase,
        private readonly createClientUsecase: CreateClientUsecase,
        private readonly findByIdClientUsecase: FindByIdClientUsecase,
        private readonly updateClientUsecase: UpdateClientUsecase,
        private readonly deleteClientUsecase: DeleteClientUsecase,
    ) {
    }

    @Get()
    async listAll() {
        return await this.findAllClientUsecase.execute();
    }

    @Get(':id')
    async listById(@Param('id') id: string | number) {
        return await this.findByIdClientUsecase.execute(id);
    }

    @Post()
    async create(@Body() body: any) {
        return await this.createClientUsecase.execute(body);

    }

    @Patch(':id')
    async update(@Param('id') id: string | number, @Body() body: any) {
        return this.updateClientUsecase.execute(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id: string | number) {
        return this.deleteClientUsecase.execute(id);
    }
}