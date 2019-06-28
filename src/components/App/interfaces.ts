export interface LocationInterface {
    radius: number;
    latLng: string;
}

export interface NuggetConditionInterface {
    type: 'html' | 'chat' | 'quiz';
    id: number;
    condition: 'read' | 'write';
    value: boolean;
}

export interface ConditionInterface {
    activated: boolean | null;
    logged: boolean | null;
    location: LocationInterface | null;
    nuggets: NuggetConditionInterface[] | null;
}
