import {Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post} from "@nestjs/common";
import {IsPublic} from "../../../../common/decorator/public.decorator";
import {ApiResponse} from "@nestjs/swagger";
import {
    AddFavoriteClientUsecase,
    DeleteFavoriteProductUsecase,
    GetAllFavoriteClientUsecase, GetAllProductsUsecase
} from "../../usecases/favorite";

@IsPublic()
@Controller('products/favorite')
export class FavoriteController {

    constructor(
        private readonly addFavoriteClientUsecase: AddFavoriteClientUsecase,
        private readonly getAllFavoriteClientUsecase: GetAllFavoriteClientUsecase,
        private readonly deleteFavoriteProductUsecase: DeleteFavoriteProductUsecase,
        private readonly getAllProductsUsecase: GetAllProductsUsecase
    ) {
    }

    @ApiResponse({
        status: HttpStatus.CREATED, description: 'Create new client usecase', content: {
            'application/json': {
                example: {
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
    @Get('/products/:id')
    async getProducts(@Param('id') id?: string | number) {
        return this.getAllProductsUsecase.execute(id)
    }

    @Get(':clientId')
    @ApiResponse({
        status: HttpStatus.CREATED, description: 'Create new client usecase', content: {
            'application/json': {
                example: {
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
    async getFavoriteClient(@Param('clientId') clientId: string | number) {
        return this.getAllFavoriteClientUsecase.execute(clientId);
    }

    @Post()
    @ApiResponse({
        status: HttpStatus.CREATED, description: 'Create new client usecase', content: {
            'application/json': {
                example: {
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
    async addFavoriteProduct(@Body() body: any) {
        return this.addFavoriteClientUsecase.execute(body)
    }

    @ApiResponse({
        status: HttpStatus.CREATED, description: 'Create new client usecase', content: {
            'application/json': {
                example: {
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
    @Delete(':clientId/:productId')
    async getDeleteFavorito(@Param() params: Record<string, any>) {
        const {clientId, productId} = params;
        return this.deleteFavoriteProductUsecase.execute(clientId, productId)
    }

}