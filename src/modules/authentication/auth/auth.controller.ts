import {Body, Controller, Get, HttpCode, HttpStatus, Post} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {IsPublic} from "../../../common/decorator/public.decorator";

@IsPublic()
@Controller('authentication/auth')
export class AuthController {

    constructor(private readonly jwtService: JwtService) {
    }

    @HttpCode(HttpStatus.OK)
    @Post()
    async authe(@Body() authData: any) {
        console.log(authData);
        const payload = {
            username: authData.email,
        }
        return {
            accessToken: await this.jwtService.signAsync(payload)
        }
    }
}