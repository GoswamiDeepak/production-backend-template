import { NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import { v4 as uuidv4 } from 'uuid';
import HttpStatus from '../error-types';
import logger from '../config/logger';
import path from 'path';

export const globalHandlerMiddleware = (
    err: HttpError,
    req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction,
) => {
    const errorId = uuidv4();
    const statusCode = err.statusCode || HttpStatus.InternalServerError;
    const isProduction = process.env.NODE_ENV === 'production';
    const message = isProduction ? 'Internal Server Error' : err.message;

    // Extract file name and line number from stack trace
    let errorLocation = 'Unknown';
    if (err.stack) {
        const stackLines = err.stack.split('\n');
        const relevantLine = stackLines[1]; // The first stack trace line usually points to the error source
        const match = relevantLine.match(/\(([^)]+)\)/); // Extract the location from parentheses
        if (match) {
            errorLocation = path.basename(match[1]); // Extract file name
        }
    }

    // Adding error to logger
    logger.error(err.message, {
        id: errorId,
        statusCode: statusCode,
        error: err.stack,
        path: req.path,
        method: req.method,
        location: errorLocation,
    });

    res.status(statusCode).json({
        errors: [
            {
                ref: errorId,
                type: err.name,
                message,
                path: req.path,
                method: req.method,
                location: isProduction ? errorLocation : 'auth-server',
                stack: isProduction ? null : err.stack,
            },
        ],
    });
};
