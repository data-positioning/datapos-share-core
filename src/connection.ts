// Dependencies - Framework
import type { ComponentConfig } from './component';
import type { ConnectorConfig } from './connector';
import type { Timestamp } from './timestamp';

// Interfaces/Types - Connection Configuration
export interface ConnectionAuthorizationConfig {
    accessToken: string; // Dropbox.
    accountId: string; // Dropbox.
    expiresAt: Timestamp; // Dropbox.
    expiresIn: number; // Dropbox.
    refreshToken: string; // Dropbox.
    scope: string; // Dropbox.
    tokenType: string; // Dropbox.
    uid: string; // Dropbox.
}
export interface ConnectionConfig extends ComponentConfig {
    authorisation: Record<string, ConnectionAuthorizationConfig>;
    connectorConfig: ConnectorConfig;
    lastVerifiedAt: Timestamp;
    notation?: string;
}

// Interfaces/Types - Connection Node Configuration
export interface ConnectionNodeConfig {
    childCount?: number;
    columnsConfigs?: ConnectionColumnConfig[];
    extension?: string;
    folderPath: string;
    handle?: DPAFileSystemFileHandle;
    id: string;
    nodeDisplayHeight?: number;
    nodes?: ConnectionNodeConfig[];
    label: string;
    lastModifiedAt?: Timestamp;
    mimeType?: string;
    name: string;
    size?: number;
    typeId: ConnectionNodeTypeId;
}

// Interfaces/Types - Connection Node Type Identifier
export type ConnectionNodeTypeId = 'folder' | 'object';

// Interfaces/Types - Configuration Description
export interface ConnectionDescription {
    objects: { id: string; label: Record<string, string>; columns: ConnectionColumnConfig[] }[];
}

// Interfaces/Types - Column Configuration
export interface ConnectionColumnConfig {
    invalidValueCount?: number;
    invalidValues?: string[];
    isIgnored?: boolean;
    isRequired?: boolean;
    isUnique?: boolean;
    label: Record<string, string>;
    maxDecimals?: number;
    maxSize?: number;
    maxValue?: string;
    minDecimals?: number;
    minSize?: number;
    minValue?: string;
    patterns?: Record<string, string>;
    storageTypeId?: StorageTypeId;
    usageTypeId?: UsageTypeId;
    validValueCount?: number;
    validValues?: Record<string, string>;
    voidValueCount?: number;
}

// Interfaces/Types - Basic
export type DPAFileSystemFileHandle = { readonly kind: 'file'; getFile(): Promise<File> };
export type StorageTypeId =
    | 'binary'
    | 'boolean'
    | 'byte'
    | 'date'
    | 'dateTime'
    | 'dateTimeOffset'
    | 'decimal'
    | 'double'
    | 'int8'
    | 'int16'
    | 'int32'
    | 'int64'
    | 'object'
    | 'single'
    | 'string'
    | 'time'
    | 'unknown';
export type UsageTypeId = 'boolean' | 'decimalNumber' | 'moment' | 'momentDate' | 'momentTime' | 'string' | 'unknown' | 'wholeNumber';

// Interfaces/Types - Encoding
export interface Encoding {
    id: string;
    confidenceLevel?: number;
}
