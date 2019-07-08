export interface LocationInterface {
    radius: number | null;
    latLng: string | null;
}

export interface NuggetConditionInterface {
    id: string;
    condition: 'read';
    value: boolean;
}

export interface ConditionInterface {
    logged: boolean | null;
    system: string | null;
    location: LocationInterface | null;
    nuggets: NuggetConditionInterface[] | null;
}
