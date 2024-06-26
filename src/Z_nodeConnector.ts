// Use NAMESPACES rather than SCHEMAS.

// import type { ConnectionConfig } from '../connection';
// import type { Connector, ConnectorConfig } from './';

// export interface NodeConnector extends Connector {
//     abortController?: AbortController | undefined;
//     readonly config: ConnectorConfig;
//     readonly connectionConfig: ConnectionConfig;

//     deleteNodeItem(nodeItemTypeId: NodeItemTypeId, id: string): Promise<void>;
//     getNodeItem(nodeItemTypeId: NodeItemTypeId, id: string): Promise<NodeItem>;
//     listNodeItems(nodeItemTypeId?: NodeItemTypeId): Promise<NodeItem[]>;
//     upsertNodeItem(nodeItemTypeId: NodeItemTypeId, nodeItem: NodeItem | Partial<NodeItem>, id?: string): Promise<NodeItem>;

//     getNodeItemProperties(nodeItemTypeId: NodeItemTypeId, id: string): Promise<NodeItemProperties>;
//     upsertNodeItemProperties(nodeItemTypeId: NodeItemTypeId, properties: NodeItemProperties, id?: string | Partial<NodeItemProperties>): Promise<NodeItemProperties>;

//     clearNodeItemData(nodeItemTypeId: NodeItemTypeId, collection: unknown): Promise<void>;
//     countNodeItemData(nodeItemTypeId: NodeItemTypeId, collection: unknown): Promise<number>;
//     determineNodeItemData(nodeItemTypeId: NodeItemTypeId, id: string, nodeDataTypeId: NodeDataTypeId, isToBeCleared: boolean): Promise<unknown>;
//     insertNodeItemData(nodeItemTypeId: NodeItemTypeId, collection: unknown, data: Record<string, unknown>[]): Promise<void>;
//     retrieveNodeItemData(
//         nodeItemTypeId: NodeItemTypeId,
//         collection: unknown,
//         lineCount?: number,
//         startRow?: number,
//         query?: NodeQuery,
//         before?: number,
//         after?: number
//     ): Promise<NodeItemDataPage>;
// }

// // Node Data Type
// export enum NodeDataTypeId {
//     Data = 'data',
//     Events = 'events',
//     Facts = 'facts'
// }

// //  Node Item
// export interface NodeItem {
//     id?: string; // TODO: Just added this?
//     placeholder?: string;
// }
// export type NodeItemProperties = Record<string, unknown>;
// export interface NodeItemDataPage {
//     after?: number;
//     before?: number;
//     data: Record<string, unknown>[];
// }

// // Node Item Type
// export enum NodeItemTypeId {
//     DataView = 'dataView',
//     Dimension = 'dimension',
//     Entity = 'entity',
//     EventQuery = 'eventQuery'
// }

// // Node Query
// export interface NodeQuery {
//     select: NodeQuerySelect;
// }
// interface NodeQuerySelect {
//     columns: NodeQueryColumn[];
// }
// interface NodeQueryColumn {
//     expression: NodeQueryExpression;
// }
// export interface NodeQueryExpression {
//     expressions: NodeQueryExpressionItem[];
//     type: string;
// }
// export interface NodeQueryExpressionItem {
//     placeholder?: string;
// }
// export interface NodeQueryExpressionValue {
//     dataItemName: string;
//     type: string;
//     value: boolean | number | string | null | undefined;
// }
