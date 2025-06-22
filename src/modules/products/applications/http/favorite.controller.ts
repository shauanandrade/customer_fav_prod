import {Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post} from "@nestjs/common";
import {IsPublic} from "../../../../common/decorator/public.decorator";
import {ApiParam, ApiResponse} from "@nestjs/swagger";
import {
    AddFavoriteClientUsecase,
    DeleteFavoriteProductUsecase,
    GetAllFavoriteByClientUsecase, GetAllProductsUsecase
} from "../../usecases/favorite";
import {ResponseFavoriteDto} from "../../infra/dtos/favorite/response-favorite.dto";
import {AddProductFavoriteClienteDto} from "../../infra/dtos/favorite/add-product-favorite-cliente.dto";
import {ParamsFavoriteClientDto} from "../../infra/dtos/favorite/params-favorite-client.dto";
import {ResponseFavoriteItensDto} from "../../infra/dtos/favorite/response-favorite-itens.dto";

@IsPublic()
@Controller('products/favorite')
export class FavoriteController {

    constructor(
        private readonly addFavoriteClientUsecase: AddFavoriteClientUsecase,
        private readonly getAllFavoriteClientUsecase: GetAllFavoriteByClientUsecase,
        private readonly deleteFavoriteProductUsecase: DeleteFavoriteProductUsecase,
        private readonly getAllProductsUsecase: GetAllProductsUsecase
    ) {
    }

    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Lista os produto favorito do cliente',
        type: ResponseFavoriteItensDto
    })
    @ApiParam({
        name: 'clientId',
        example: 1,
        required: true,
        description: 'ID do cliente'
    })
    @Get(':clientId')
    async getFavoriteClient(@Param('clientId') clientId: string | number) {
        return this.getAllFavoriteClientUsecase.execute(clientId);
    }

    @Post()
    @ApiResponse({
        status: HttpStatus.CREATED,
        description: 'Adicionar um novo produto a lista de favorito do cliente',
        type: ResponseFavoriteDto
    })
    async addFavoriteProduct(@Body() body: AddProductFavoriteClienteDto) {
        return this.addFavoriteClientUsecase.execute(body)
    }

    @ApiResponse({
        status: HttpStatus.NO_CONTENT, description: 'Remove o produto do favorito do cliente'
    })
    @ApiParam({
        name: 'clientId',
        example: 1,
        required: true,
        description: 'ID do cliente'
    })
    @ApiParam({
        name: 'productId',
        example: 1,
        required: true,
        description: 'ID do produto'
    })
    @Delete(':clientId/:productId')
    async getDeleteFavorito(@Param() params: ParamsFavoriteClientDto) {
        const {clientId, productId} = params;
        await this.deleteFavoriteProductUsecase.execute(clientId, productId)
    }

}