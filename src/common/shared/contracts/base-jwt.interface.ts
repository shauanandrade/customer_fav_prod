import {JwtSignOptions} from "@nestjs/jwt";

export interface IBaseJwt {
    signAsync(payload: string | Buffer, options?: JwtSignOptions): Promise<string>;
}