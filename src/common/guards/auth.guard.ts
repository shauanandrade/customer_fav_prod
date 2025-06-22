import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {TOKEN_JWT} from "../constants/token-jwt.constants";
import {Request} from "express";
import {Reflector} from "@nestjs/core";
import {TOKEN} from "../constants/tokens.constants";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private readonly reflector: Reflector,
        private readonly config: ConfigService) {
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const isPublic = this.reflector.getAllAndOverride(TOKEN.IS_PUBLIC,[
            context.getHandler(),
            context.getClass()
        ]);

        if(isPublic){
           return true;
        }

        const request = context.switchToHttp().getRequest();
        const token = this.extractToken(request);

        if (!token) {
            throw new UnauthorizedException("No token provided");
        }

        try {
            request['user'] = await this.jwtService.verifyAsync(token, {
                secret: TOKEN_JWT.secret(this.config)
            });
        } catch (err) {
            throw new UnauthorizedException("No token provided");
        }
        return true;
    }

    private extractToken(request: Request) {
        const [type, token] = request.headers?.authorization?.split(" ") ?? [];

        return type === 'Bearer' ? token : undefined
    }
}