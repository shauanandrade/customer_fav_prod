import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post} from "@nestjs/common";
import {
    CreateClientUsecase, DeleteClientUsecase,
    FindAllClientUsecase,
    FindByIdClientUsecase,
    UpdateClientUsecase
} from "../../usecases/client";
import {IsPublic} from "../../../../common/decorator/public.decorator";
import {CreateInputClientDto} from "../../infra/dtos/client/create-input-client.dto";
import {ApiParam, ApiResponse} from "@nestjs/swagger";
import {ResponseClientsDto} from "../../infra/dtos/client/response-clients.dto";
import {UpdateInputClientDto} from "../../infra/dtos/client/update-input-client.dto";

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

    @ApiResponse({
        status: HttpStatus.OK,
        description: "Lista todos os registro de clientes",
        type: ResponseClientsDto,
        isArray: true,

    })
    @Get()
    async listAll(): Promise<ResponseClientsDto> {
        return await this.findAllClientUsecase.execute();
    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: "Lista o cliente que foi passado",
        content: {
            'application/json': {
                example: {
                    "id": 5,
                    "name": "USUARIO 2",
                    "email": "usuario@gmail.com",
                    "createdAt": "2025-06-21T03:35:39.548Z",
                    "updatedAt": "2025-06-21T03:35:39.548Z"
                }
            }
        }
    })
    @ApiParam({
        name: 'id',
        required: true,
        description: 'Id do cliente',
        example: 1
    })
    @Get(':id')
    async listById(@Param('id') id: string | number) {
        return await this.findByIdClientUsecase.execute(id);
    }

    @IsPublic()
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Create new client usecase',
        type: ResponseClientsDto
    })
    @ApiResponse({
        status: HttpStatus.CONFLICT,
        description: 'Caso o email já esteja cadastrado ',
        content:{
            'application/json': {
                example: {
                    "message": "Email já cadastrado",
                    "error": "Conflict",
                    "statusCode": 409
                }
            }
        }
    })
    @Post()
    async create(@Body() body: CreateInputClientDto) {
        return await this.createClientUsecase.execute(body);

    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: "Atualizar os dados do cliente",
        type: ResponseClientsDto
    })
    @ApiParam({
        name: 'id',
        required: true,
        description: 'Id do cliente',
        example: 1
    })
    @Patch(':id')
    async update(@Param('id') id: string | number, @Body() inputClient: UpdateInputClientDto) {
        return this.updateClientUsecase.execute(id, inputClient);
    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: "Delete o Cliente",
    })
    @ApiParam({
        name: 'id',
        required: true,
        description: 'Id do cliente',
        example: 1
    })
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string | number) {
        return this.deleteClientUsecase.execute(id);
    }
}