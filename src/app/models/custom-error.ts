export class CustomError extends Error {
    status: string;
    message: string;
    constructor(status: string, message: string) {
        super();
        this.status = status;
        this.message = message;
    }
}
