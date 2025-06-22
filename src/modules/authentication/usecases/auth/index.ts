import {Provider} from "@nestjs/common";
import {AuthSignInUsecase} from "./auth-sign-in.usecase";

export {AuthSignInUsecase};

export const AuthUsecase: Provider[] = [
    AuthSignInUsecase
]