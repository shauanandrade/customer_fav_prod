
declare module 'express' {
    interface Request {
        headers?: {
            authorization?: string;
        }
    }
}