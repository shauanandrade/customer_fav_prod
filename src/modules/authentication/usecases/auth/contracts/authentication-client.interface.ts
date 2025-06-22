

export interface IAuthenticationRepository {
    auth(email: string, password: string): Promise<any>;
}