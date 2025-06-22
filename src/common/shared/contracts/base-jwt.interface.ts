
export interface IBaseJwt {
    genToken(payload: any, options?: any): Promise<string>;
}