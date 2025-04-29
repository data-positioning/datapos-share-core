// Interfaces/Types
export interface ErrorContext extends Record<string, unknown> {
    fetchBody?: string;
    locator?: string;
}

// Interfaces/Types - Error Data
export interface ErrorData extends Record<string, unknown> {
    cause?: unknown;
    context?: ErrorContext;
    error: Error;
    message: string;
    stack?: string;
}

// Interfaces/Types - Serialised Error Data
export interface SerialisedErrorData {
    cause?: SerialisedErrorData;
    context?: string;
    message: string;
    name?: string;
    notes?: string;
    originalStack?: string;
}

// Classes - Data Positioning Error
export class DataPosError extends Error {
    context?: ErrorContext;
    originalStack?: string;
    constructor(message: string, context?: ErrorContext, originalStack?: string, cause?: unknown) {
        super(message);
        this.name = 'DataPosError';
        this.context = context;
        this.originalStack = originalStack;
        this.cause = cause;
    }
}

// Classes - Abort Error
export class AbortError extends DataPosError {
    constructor(message: string, context?: ErrorContext, originalStack?: string, cause?: unknown) {
        super(message, context, originalStack, cause);
        this.name = 'AbortError';
    }
}

// Classes - Backend Error
export class BackendError extends DataPosError {
    constructor(message: string, context?: ErrorContext, originalStack?: string, cause?: unknown) {
        super(message, context, originalStack, cause);
        this.name = 'BackendError';
    }
}

// // Classes - Connector Error
// export class ConnectorError extends DataPosError {
//     constructor(message: string, context?: ErrorContext, originalStack?: string, cause?: unknown) {
//         super(message, context, originalStack, cause);
//         this.name = 'ConnectorError';
//     }
// }

// Classes - Engine Error
export class EngineError extends DataPosError {
    constructor(message: string, context?: ErrorContext, originalStack?: string, cause?: unknown) {
        super(message, context, originalStack, cause);
        this.name = 'EngineError';
    }
}

// Classes - Fetch Error
export class FetchError extends DataPosError {
    constructor(message: string, context?: ErrorContext) {
        super(message, context);
        this.name = 'FetchError';
    }
}

// Classes - Frontend Error
export class FrontendError extends DataPosError {
    constructor(message: string, context?: ErrorContext, originalStack?: string, cause?: unknown) {
        super(message, context, originalStack, cause);
        this.name = 'FrontendError';
    }
}

// Utilities - Build Fetch Error
export const buildFetchError = async (response: { status: number; statusText: string; text: () => Promise<string> }, message: string, locator: string) => {
    const fetchMessage = `${message} Response status '${response.status}${response.statusText ? ` - ${response.statusText}` : ''}' received.`;
    return new FetchError(fetchMessage, { fetchBody: await response.text(), locator });
};

// Utilities - Deserialise Error
export const deserialiseError = (errorData: SerialisedErrorData): Error => {
    switch (errorData.name) {
        case 'AbortError':
            return new AbortError(
                errorData.message,
                errorData.context ? JSON.parse(errorData.context) : undefined,
                errorData.originalStack,
                errorData.cause ? deserialiseError(errorData.cause) : undefined
            );
        case 'BackendError':
            return new BackendError(
                errorData.message,
                errorData.context ? JSON.parse(errorData.context) : undefined,
                errorData.originalStack,
                errorData.cause ? deserialiseError(errorData.cause) : undefined
            );
        // case 'ConnectorError':
        //     return new ConnectorError(
        //         errorData.message,
        //         errorData.context ? JSON.parse(errorData.context) : undefined,
        //         errorData.originalStack,
        //         errorData.cause ? deserialiseError(errorData.cause) : undefined
        //     );
        case 'DataPosError':
            return new DataPosError(
                errorData.message,
                errorData.context ? JSON.parse(errorData.context) : undefined,
                errorData.originalStack,
                errorData.cause ? deserialiseError(errorData.cause) : undefined
            );
        case 'EngineError':
            return new EngineError(
                errorData.message,
                errorData.context ? JSON.parse(errorData.context) : undefined,
                errorData.originalStack,
                errorData.cause ? deserialiseError(errorData.cause) : undefined
            );
        case 'FetchError':
            return new FetchError(errorData.message, errorData.context ? JSON.parse(errorData.context) : undefined);
        case 'FrontendError':
            return new FrontendError(
                errorData.message,
                errorData.context ? JSON.parse(errorData.context) : undefined,
                errorData.originalStack,
                errorData.cause ? deserialiseError(errorData.cause) : undefined
            );
        default:
            return new Error(errorData.message);
    }
};

// Utilities - Format Error
export const formatError = (sourceError?: unknown, context?: { locator?: string }): ErrorData => {
    let errorData: ErrorData;
    if (
        sourceError instanceof Error &&
        (sourceError.name === 'AbortError' ||
            sourceError.name === 'BackendError' ||
            sourceError.name === 'ConnectorError' ||
            sourceError.name === 'DataPosError' ||
            sourceError.name === 'EngineError' ||
            sourceError.name === 'FetchError' ||
            sourceError.name === 'FrontendError')
    ) {
        const dataPosSourceError = sourceError as DataPosError;
        errorData = {
            context,
            error: dataPosSourceError,
            message: dataPosSourceError.message,
            stack: dataPosSourceError.stack,
            cause: dataPosSourceError.cause
        };
    } else if (sourceError instanceof Error) {
        errorData = { cause: sourceError.cause, context, error: sourceError, message: sourceError.message, stack: sourceError.stack };
    } else if (sourceError) {
        const error = new Error(String(sourceError));
        errorData = { context, error, message: error.message };
    } else {
        const error = new Error('Unknown error');
        errorData = { context, error, message: error.message };
    }
    if (!errorData.message.endsWith('.')) errorData.message = `${errorData.message}.`;
    return errorData;
};

// Utilities - Serialise Error
export const serialiseError = (error: unknown): SerialisedErrorData => {
    if (
        error instanceof DataPosError ||
        (error instanceof Error &&
            (error.name === 'AbortError' ||
                error.name === 'BackendError' ||
                error.name === 'ConnectorError' ||
                error.name === 'EngineError' ||
                error.name === 'FetchError' ||
                error.name === 'FrontendError'))
    ) {
        const dataPosError = error as DataPosError;
        return {
            name: dataPosError.name,
            message: dataPosError.message,
            context: JSON.stringify(dataPosError.context),
            originalStack: dataPosError.stack,
            cause: dataPosError.cause ? serialiseError(dataPosError.cause) : undefined
        };
    } else if (error instanceof Error) {
        return {
            name: error.name,
            message: error.message,
            originalStack: error.stack,
            cause: error.cause ? serialiseError(error.cause) : undefined
        };
    } else {
        return { message: String(error || 'Unknown error.') };
    }
};
