// Dependencies - Framework
import type { Timestamp } from './timestamp';

// Interfaces/Types - Component Configuration - TODO: Do we need to extend Record?
export interface ComponentConfig {
    description?: Record<string, unknown>;
    firstCreatedAt?: Timestamp;
    id: string;
    label: Record<string, string>;
    lastUpdatedAt?: Timestamp;
    logo?: string;
    logoDark?: string;
    status?: ComponentStatus;
    statusId: ComponentStatusId;
    typeId: ComponentTypeId;
}

// Interfaces/Types - Component References
export interface ComponentRef {
    id: string;
    label: Record<string, string>;
}

export type ComponentTypeId = 'app' | 'connection' | 'connector' | 'engine' | 'focus' | 'model' | 'dataView' | 'eventQuery' | 'presentation' | 'presenter' | 'tutorial'; // TODO: Review these.

type StatusColor = 'success' | 'error' | 'primary' | 'secondary' | 'info' | 'warning' | 'neutral';

// Interfaces/Types - Component Status
export type ComponentStatusId = 'alpha' | 'beta' | 'generalAvailability' | 'notApplicable' | 'preAlpha' | 'proposed' | 'releaseCandidate' | 'unavailable' | 'underReview';
export type ComponentStatus = { id: string; color?: StatusColor; label: string };
type ComponentStatusConfig = { id: string; color?: StatusColor; label: Record<string, string> };
const componentStatuses: ComponentStatusConfig[] = [
    { id: 'alpha', color: 'warning', label: { en: 'alpha' } },
    { id: 'beta', color: 'success', label: { en: 'beta' } },
    { id: 'generalAvailability', label: { en: '' } },
    { id: 'notApplicable', label: { en: 'not-applicable' } },
    { id: 'preAlpha', color: 'warning', label: { en: 'pre-alpha' } },
    { id: 'proposed', color: 'neutral', label: { en: 'proposed' } },
    { id: 'releaseCandidate', label: { en: 'release-candidate' } },
    { id: 'unavailable', color: 'neutral', label: { en: 'unavailable' } },
    { id: 'underReview', color: 'neutral', label: { en: 'under-review' } }
];
export const getComponentStatus = (id: string, localeId = 'en'): ComponentStatus => {
    const componentStatus = componentStatuses.find((componentStatus) => componentStatus.id === id);
    if (componentStatus) return { ...componentStatus, label: componentStatus.label[localeId] || componentStatus.label['en'] || id };
    return { id, color: 'neutral', label: id };
};
