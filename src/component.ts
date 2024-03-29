export interface Component {
    config: ComponentConfig;
}

export interface ComponentConfig {
    description?: Record<string, string>;
    firstCreatedAt?: FirebaseTimestamp;
    id: string;
    label: Record<string, string>;
    lastUpdatedAt?: FirebaseTimestamp;
    logo?: string;
    status?: ComponentStatus;
    statusId: string;
    typeId: ComponentTypeId;
}

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
    return { id, color: '#d62728', label: id };
};

export enum ComponentTypeId {
    Connection = 'connection',
    Context = 'context',
    DataConnector = 'dataConnector',
    DataView = 'dataView',
    EventQuery = 'eventQuery',
    NodeConnector = 'nodeConnector',
    Presentation = 'presentation',
    Tutorial = 'tutorial'
}

export interface FirebaseTimestamp {
    nanoseconds: number;
    seconds: number;
}
