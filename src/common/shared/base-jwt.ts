import {JwtService, JwtSignOptions} from "@nestjs/jwt";
import {IBaseJwt} from "./contracts/base-jwt.interface";
import {Injectable} from "@nestjs/common";

@Injectable()
export class BaseJwt implements IBaseJwt {

    constructor(private readonly jwtService: JwtService) {
    }

    async genToken(payload: any, options?: any): Promise<string> {
        return await this.jwtService.signAsync(payload, options);
    }
}
