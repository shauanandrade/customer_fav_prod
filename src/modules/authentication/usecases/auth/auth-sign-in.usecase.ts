import {BadRequestException, Inject, NotFoundException, UnauthorizedException} from "@nestjs/common";
import TOKEN_AUTHENTICATION from "../../infra/contantes/token-authentication.constants";
import {IAuthenticationRepository} from "./contracts/authentication-client.interface";
import {IBaseJwt} from "../../../../common/shared/contracts/base-jwt.interface";
import {TOKEN} from "../../../../common/constants/tokens.constants";
import {AuthSignInDto} from "../../infra/dtos/auth/auth-sign-in.dto";
import {Password} from "../../../../common/value-objects/password.vo";
import {ResponseAuthDto} from "../../infra/dtos/auth/response-auth.dto";


export class AuthSignInUsecase {
    constructor(
        @Inject(TOKEN_AUTHENTICATION.authenticationClientRepository) private readonly repo: IAuthenticationRepository,
        @Inject(TOKEN.BASEJWT) private readonly baseJwt: IBaseJwt
    ) {
    }

    async execute(inputAuth: AuthSignInDto): Promise<ResponseAuthDto> {
        try {
            const auth = await this.repo.auth(inputAuth.email, inputAuth.password);

            if (!auth) {
                throw new UnauthorizedException("Autenticação é invalída.");
            }

            const isValid = await new Password(inputAuth.password).compare(auth.password);
            if (!isValid) {
                throw new UnauthorizedException("Autenticação é invalída.");
            }

            const payload = {
                sub: auth.id,
                email: auth.email,
                name: auth.name,
            }

            return {
                accessToken: await this.baseJwt.genToken(payload)
            }
        } catch (err) {
            if(err instanceof UnauthorizedException) {
                throw err;
            }
            throw new BadRequestException(err.message)
        }
    }
}