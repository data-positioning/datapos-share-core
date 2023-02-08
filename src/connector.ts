/**
 * @author Jonathan Terrell <terrell.jm@gmail.com>
 * @copyright 2023 Jonathan Terrell
 * @file datapos-engine-support/src/connector.ts
 * @license ISC
 */

// Engine Dependencies
import type { PrimaryComponentConfig } from '.';
import type { Plugin, PluginItem } from './plugin';

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connector
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface Connector extends Plugin {
    version: string;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connector - Config
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

interface Implementation {
    activeConnectionCount: number;
    canDescribe: boolean;
    id: string;
    authMethodId: ConnectorAuthMethodId;
    label: string;
    maxConnectionCount: number;
    params: Record<string, string>[];
}

export interface ConnectorConfig extends PrimaryComponentConfig {
    implementations: Implementation[];
    label: string;
    logo: string;
    logoWidth: string;
    usageId: ConnectorUsageId;
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connector - Item
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export interface ConnectorItem extends PluginItem {
    activeConnectionCount: number;
    canDescribe: boolean;
    categoryId: string;
    hasOnlyAuthImplementations: boolean;
    implementations: ConnectorImplementation[];
    logo: string;
    logoWidth: string;
    maxConnectionCount: number;
    statusId: string;
    usageId: ConnectorUsageId;
}

export interface ConnectorImplementation {
    activeConnectionCount: number;
    canDescribe: boolean;
    id: string;
    authMethodId: ConnectorAuthMethodId;
    label: string;
    maxConnectionCount: number;
    params: Record<string, string>[];
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Connector - Enumerations
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

export enum ConnectorAuthMethodId {
    APIKey = 'apiKey',
    Disabled = 'disabled',
    OAuth2 = 'oAuth2',
    None = 'none'
}

export type ConnectorCategory = { label: string };
const componentCategories: Record<string, ConnectorCategory> = {
    application: { label: 'Application' },
    curatedDataset: { label: 'Curated Dataset' },
    database: { label: 'Database' },
    fileStore: { label: 'File Store' }
};
export const lookupConnectorCategory = (id: string): ConnectorCategory => (componentCategories[id] ? componentCategories[id] : { label: id });

export type ConnectorStatus = { color?: string; label: string };
const connectorStatuses: Record<string, ConnectorStatus> = {
    alpha: { color: '#d62728', label: 'alpha' },
    beta: { color: '#8c564b', label: 'beta' },
    generalAvailability: { label: '' },
    preAlpha: { color: '#d62728', label: 'pre-alpha' },
    proposed: { color: '#666666', label: 'proposed' },
    releaseCandidate: { color: '#ff7f0e', label: 'release-candidate' },
    unavailable: { color: '#d62728', label: 'unavailable' },
    underReview: { color: '#666666', label: 'under-review' }
};
export const lookupConnectorStatus = (id: string): ConnectorStatus => (connectorStatuses[id] ? connectorStatuses[id] : { color: '#984ea3', label: id });

enum ConnectorUsageId {
    Bidirectional = 'bidirectional',
    Destination = 'destination',
    Node = 'node',
    Source = 'source',
    None = 'none'
}
