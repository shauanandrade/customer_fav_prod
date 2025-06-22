import {HttpService} from "@nestjs/axios";
import {IProductFakestore} from "./contracts/product-fakestore.interface";
import {PRODUCT_FAKESTORE_API} from "../contantes/product-fakestore.constants";
import {ProductApiEnum} from "../enums/product-api.enum";
import {Injectable} from "@nestjs/common";
import {firstValueFrom} from "rxjs";

@Injectable()
export class ProductFakestoreExternal implements IProductFakestore {

    constructor(private readonly httpService: HttpService) {
    }

    async getAllProducts(): Promise<any> {
        const baseUrl = PRODUCT_FAKESTORE_API.BASE_URL;
        const endpoint = `${baseUrl}${ProductApiEnum.GET_PRODUCT}`;

        const {data} = await firstValueFrom(
            this.httpService.get(endpoint)
        );

        return data;
    }

    async getProductsId(id: string | number): Promise<any> {
        const baseUrl = PRODUCT_FAKESTORE_API.BASE_URL;
        const endpoint = `${baseUrl}${ProductApiEnum.GET_PRODUCT}/${id}`;
        try {
            const {data} = await firstValueFrom(
                this.httpService.get(endpoint)
            );
            return data;
        }catch(err) {
            throw new Error(err)
        }
    }
}