// Dependencies - Engine
import type { ComponentConfig } from '../component';

// Declaration
export interface ContextConfig extends ComponentConfig {
    focuses: ContextFocusReference[];
}

interface ContextFocusReference {
    id: string;
    label: string;
    models: ContextModelReference[];
}

interface ContextModelReference {
    id: string;
    label: string;
}