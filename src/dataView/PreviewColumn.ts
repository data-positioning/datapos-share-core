import type { FieldUsageTypeId } from '../connection';

export class PreviewColumn {
    dataUsageTypeId: FieldUsageTypeId;
    label: string;

    constructor(dataUsageTypeId: FieldUsageTypeId, label: string) {
        this.dataUsageTypeId = dataUsageTypeId;
        this.label = label;
    }
}
