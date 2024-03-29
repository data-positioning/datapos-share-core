// Exports - Base
export interface BaseConfig {
    id: string;
    label: string;
}

// Exports - Components
export { type ComponentConfig, type ComponentStatus, ComponentTypeId, getComponentStatus } from './component';

// Exports - Components - Connector
export { type Connector, ConnectorAuthMethodId, type ConnectorCallbackData, type ConnectorConfig, ConnectorUsageId } from './connector';
export type {
    DataConnector,
    DataConnectorFieldInfo,
    DataConnectorFileInfo,
    DataConnectorRecord,
    ListEntriesResponse,
    ListEntriesSettings,
    ListEntryConfig,
    ListEntriesResult,
    Preview,
    // PreviewResponse,
    PreviewInterface,
    // PreviewParameters,
    ReadInterface,
    ReadInterfaceSettings,
    WriteInterface
    // WriteInterfaceSettings
} from './connector/dataConnector';
export { PreviewTypeId, ListEntryTypeId } from './connector/dataConnector';

// Exports - Node - Connector
export { NodeDataTypeId, NodeItemTypeId } from './connector/nodeConnector';
export type { NodeConnector, NodeItem, NodeItemDataPage, NodeItemProperties, NodeQuery, NodeQueryExpression, NodeQueryExpressionValue } from './connector/nodeConnector';

// Exports - Components - Connection
export type { ConnectionConfig } from './connection';
export { FieldStorageTypeId, FieldUsageTypeId } from './connection';

// Exports - Components - Context
export type {
    ContextConfig,
    ContextModelConfig,
    ContextDimensionConfig,
    ContextEntityCharacteristicConfig,
    ContextEntityComputationConfig,
    ContextEntityConfig,
    ContextEntityEventConfig,
    ContextHierarchyConfig,
    ContextViewConfig,
    Event
} from './context';

// Exports - Components - Data View
export type { DataViewConfig, DataViewContentAudit, DataViewPreview, DataViewRelationshipsAudit, Encoding, EncodingConfig, FileSchema } from './dataView';
export { DataFormatId, getDataFormats, getValueDelimiters, ValueDelimiterId } from './dataView';
export { PreviewColumn } from './dataView/PreviewColumn';
export { ContentAuditColumn, type ParsedValue } from './dataView/ContentAuditColumn';

// Exports - Components - Event Query
export type { EventQueryConfig } from './eventQuery';

// Exports - Components - Usage Kit
export type { TutorialConfig } from './usageKit';

// Exports - Errors
export {
    AbortError,
    BackendError,
    ConnectorError,
    DataPosError,
    EngineError,
    EngineCoreError,
    EngineWorkerError,
    FetchError,
    FrontendError,
    type SerialisedErrorData
} from './errors';

// Exports - Utilities
export {
    convertODataTypeToDataType,
    establishVendorAccessToken,
    extractFileExtensionFromFilePath,
    formatNumberAsDecimalNumber,
    formatNumberAsDuration,
    formatNumberAsStorageSize,
    formatNumberAsWholeNumber,
    lookupMimeTypeForFileExtension
} from './utilities';
