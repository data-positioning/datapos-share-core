// Dependencies - Engine
import type { FirebaseTimestamp } from '.';

// Declarations - Component
export interface Component {
    config: ComponentConfig;
}

// Declarations - Component Config
export interface ComponentConfig {
    description: string;
    firstCreatedAt: FirebaseTimestamp;
    id: string;
    label: Record<string, string>;
    lastUpdatedAt: FirebaseTimestamp;
    logo: string;
    status: ComponentStatus;
    statusId: string;
    typeId: ComponentTypeId;
}

// Declarations - Component Status
export type ComponentStatus = { id: string; color?: string; label: string };
type ComponentStatusConfig = { id: string; color?: string; label: Record<string, string> };
const componentStatuses: ComponentStatusConfig[] = [
    { id: 'alpha', color: '#d62728', label: { en: 'alpha' } },
    { id: 'beta', color: '#8c564b', label: { en: 'beta' } },
    { id: 'generalAvailability', label: { en: '' } },
    { id: 'preAlpha', color: '#d62728', label: { en: 'pre-alpha' } },
    { id: 'proposed', color: '#666666', label: { en: 'proposed' } },
    { id: 'releaseCandidate', color: '#ff7f0e', label: { en: 'release-candidate' } },
    { id: 'unavailable', color: '#d62728', label: { en: 'unavailable' } },
    { id: 'underReview', color: '#666666', label: { en: 'under-review' } }
];
export const getComponentStatus = (id: string, localeId = 'en'): ComponentStatus => {
    const componentStatus = componentStatuses.find((componentStatus) => componentStatus.id === id);
    if (componentStatus) return { ...componentStatus, label: componentStatus.label[localeId] || componentStatus.label['en'] || id };
    return { id, color: '#984ea3', label: id };
};

// Declarations - Component Type
export enum ComponentTypeId {
    Connection = 'connection',
    Connector = 'connector', // TODO: Need all of these?
    Context = 'context',
    ContextModel = 'contextModel', // TODO: Need all of these?
    DataConnector = 'dataConnector', // TODO: Need all of these?
    Dimension = 'dimension',
    Entity = 'entity',
    EventQuery = 'eventQuery',
    NodeConnector = 'nodeConnector', // TODO: Need all of these?
    SourceView = 'sourceView',
    ViewTemplate = 'viewTemplate',
    UsageKit = 'usageKit'
}
