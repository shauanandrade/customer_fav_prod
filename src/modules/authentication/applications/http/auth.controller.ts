import {Body, Controller, Get, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {IsPublic} from "../../../../common/decorator/public.decorator";
import {AuthSignInUsecase} from "../../usecases/auth";
import {AuthSignInDto} from "../../infra/dtos/auth/auth-sign-in.dto";
import {ApiResponse} from "@nestjs/swagger";

@IsPublic()
@Controller('authentication/auth')
export class AuthController {

    constructor(private readonly authenticationClientUsecase: AuthSignInUsecase) {
    }

    @ApiResponse({
        status: HttpStatus.OK, description: 'Faz a autenticação e gera o token da API', content: {
            'application/json': {
                example: {
                    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNoYXVhbkBnbWFpbC5jb20iLCJpYXQiOjE3NTA1NjAzNzYsImV4cCI6MTc1MDU2Mzk3Nn0",
                }
            }
        }
    })
    @HttpCode(HttpStatus.OK)
    @Post()
    async authe(@Body() authData: AuthSignInDto) {
        return this.authenticationClientUsecase.execute(authData);
    }
}