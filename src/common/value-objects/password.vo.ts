import * as bcrypt from 'bcrypt';


export class Password {

    constructor(private value: string) {
    }

    async create(): Promise<Password> {
        const hash = await bcrypt.hash(this.value, 10);
        return new Password(hash);
    }

    async compare(token: string): Promise<boolean> {
        return await bcrypt.compare(this.value, token);

    }

    getValue(): string {
        return this.value;
    }
}