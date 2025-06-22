import {IBaseRepository} from "../../../../common/orms/contracts/base-repository.interfaces";
import {IAuthenticationRepository} from "../../usecases/auth/contracts/authentication-client.interface";
import {BaseResponse} from "../../../../common/type/base-response.type";


export class AuthRepository implements IAuthenticationRepository {

    constructor(
        private readonly repository: IBaseRepository,
    ) {
    }

    async auth(email: string, password: string): Promise<BaseResponse> {
        try {
            const user = await this.repository.listOne({
                where: {
                    email: email,
                }
            });
            return user;
        }catch (error) {
            throw new Error(error);
        }
    }

}