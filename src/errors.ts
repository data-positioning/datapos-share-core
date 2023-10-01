export interface SerialisedErrorData {
    cause?: SerialisedErrorData;
    context?: string;
    message: string;
    name?: string;
    stack?: string;
}

// Errors - Abort
export class AbortError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'AbortError';
    }
}

// Errors - Backend
export class BackendError extends Error {
    context?: string;
    constructor(message: string, context?: string, cause?: unknown) {
        super(message);
        this.name = 'BackendError';
        this.context = context;
        this.cause = cause;
    }
}

// Errors - Connector
export class ConnectorError extends Error {
    constructor(message: string, cause?: unknown) {
        super(message);
        this.name = 'ConnectorError';
        this.cause = cause;
    }
}

// Errors - Engine
export class EngineError extends Error {
    context?: string;
    constructor(message: string, context?: string, cause?: unknown) {
        super(message);
        this.name = 'EngineError';
        this.context = context;
        this.cause = cause;
    }
}

// Errors - Engine Core
export class EngineCoreError extends Error {
    originalName: string;
    constructor(message: string, originalName: string) {
        super(message);
        this.name = 'EngineCoreError';
        this.originalName = originalName;
    }
}

// Errors - Engine Worker
export class EngineWorkerError extends Error {
    constructor(cause?: unknown) {
        super('Engine worker error wrapper.');
        this.name = 'EngineWorkerError';
        this.cause = cause;
    }
}

// Errors - Fetch Response
export class FetchResponseError extends Error {
    bodyText: string;
    status: number;
    statusText: string;
    constructor(status: number, statusText: string, bodyText: string) {
        super('Failed to return fetch response.');
        this.name = 'FetchResponseError';
        this.status = status;
        this.statusText = statusText;
        this.bodyText = bodyText;
    }
}

// Errors - Frontend
export class FrontendError extends Error {
    context?: string;
    constructor(message: string, context?: string, cause?: unknown) {
        super(message);
        this.name = 'FrontendError';
        this.context = context;
        this.cause = cause;
    }
}
