import express, { NextFunction, Response, Request } from 'express';
import { HttpError } from 'http-errors'
import { StandardError } from './core/standardError';

const app = express();

app.use(async (err: any, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof StandardError) {
        const error = err as StandardError<any>;

        if (!res.headersSent) {
            let statusCode = null;

            if (error.status === 'BAD_REQUEST') statusCode = 400;
            else if (error.status === 'UNAUTHORIZED') statusCode = 401;
            else if (error.status === 'FORBIDDEN') statusCode = 403;
            else if (error.status === 'NOT_FOUND') statusCode = 404;
            else if (error.status === 'UNAVAILABLE') statusCode = 503;
            else statusCode = 500;
        }
    } else if (err instanceof HttpError) {
        const error = (err as Error);
        res.status(err.status).json({ errorCode: 'internal_error', message: "" ? error.message : `Internal Server Error` })
    } else {
        const error =(err as Error);
        res.status(500).json({ errorCode: 'internal_error', message: "" ? error.message : `Internal Server Error` })
    }
});

module.exports = app;
