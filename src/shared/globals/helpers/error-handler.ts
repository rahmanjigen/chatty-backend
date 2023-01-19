import  HTTP_STATUS  from "http-status-codes";
 

export interface IErrorResponse {
    message: string;
    statusCode: number;
    status: string;
    serializeErrors() : IError;
}

export interface IError {
    message: string;
    statusCode: number;
    status: string;
}

export abstract class  customError extends Error {
    abstract statusCode: number;
    abstract status : string;

    constructor(message: string) {
        super(message)
    }

    serializeErrors(): IError {
        return {
            message: this.message,
            status : this.status ,
            statusCode: this.statusCode
        }
    }
}

export class JoiRequestValidationError extends customError {
    statusCode = HTTP_STATUS.BAD_REQUEST;
    status = "errors";

    constructor(message : string) {
        super(message);
    }

}
export class BadRequestError extends customError {
    statusCode = HTTP_STATUS.BAD_REQUEST;
    status = "errors";

    constructor(message : string) {
        super(message);
    }

}

export class NOTFOUNDERRORS extends customError {
    statusCode = HTTP_STATUS.NOT_FOUND;
    status = "errors";

    constructor(message : string) {
        super(message);
    }

}

export class NOTAUTHORIZEDERROR extends customError {
    statusCode = HTTP_STATUS.UNAUTHORIZED;
    status = "errors";

    constructor(message : string) {
        super(message);
    }

}

export class FILETOOLARGEERROR extends customError {
    statusCode =HTTP_STATUS.REQUEST_TOO_LONG;
    status = "errors";

    constructor(message : string) {
        super(message);
    }

}

export class SERVERERROR extends customError {
    statusCode = HTTP_STATUS.SERVICE_UNAVAILABLE;
    status = "errors";

    constructor(message : string) {
        super(message);
    }

}