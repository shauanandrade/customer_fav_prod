import {Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post} from "@nestjs/common";
import {
    CreateClientUsecase, DeleteClientUsecase,
    FindAllClientUsecase,
    FindByIdClientUsecase,
    UpdateClientUsecase
} from "../../usecases/client";
import {IsPublic} from "../../../../common/decorator/public.decorator";
import {CreateInputClientDto} from "../../infra/dtos/client/create-input-client.dto";
import {ApiResponse} from "@nestjs/swagger";

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
    @ApiResponse({status: HttpStatus.CREATED, description: 'Create new client usecase',content:{
        'application/json': {
            example:{
                "id": 5,
                "name": "NOME CLIENTE",
                "email": "cliente_email@gmail.com",
                "password": "shauan@123",
                "createdAt": "2025-06-21T03:35:39.548Z",
                "updatedAt": "2025-06-21T03:35:39.548Z"
            }
        }
    }
    })
    async create(@Body() body: CreateInputClientDto) {
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