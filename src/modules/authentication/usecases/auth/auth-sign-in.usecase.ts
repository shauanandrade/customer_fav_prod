import {BadRequestException, Inject, NotFoundException} from "@nestjs/common";
import TOKEN_AUTHENTICATION from "../../infra/contantes/token-authentication.constants";
import {IAuthenticationRepository} from "./contracts/authentication-client.interface";
import {IBaseJwt} from "../../../../common/shared/contracts/base-jwt.interface";
import {TOKEN} from "../../../../common/constants/tokens.constants";
import {AuthSignInDto} from "../../infra/dtos/auth/auth-sign-in.dto";


export class AuthSignInUsecase {
    constructor(
        @Inject(TOKEN_AUTHENTICATION.authenticationClientRepository) private readonly repo: IAuthenticationRepository,
        @Inject(TOKEN.BASEJWT) private readonly baseJwt: IBaseJwt
    ) {
    }

    async execute(inputAuth: AuthSignInDto): Promise<any> {
        try {
            const auth = await this.repo.auth(inputAuth.email, inputAuth.password);

            if (!auth) {
                throw new NotFoundException("Autenticação é invalída.");
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
            throw new BadRequestException(err.message)
        }
    }
}