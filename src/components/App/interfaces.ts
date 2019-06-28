export interface LocationInterface {
    radius: number | null;
    latLng: string | null;
}

enum OperatingSystemInterface {
    iOS = 'iOS',
    Android = 'Android',
}

export interface NuggetConditionInterface {
    id: number;
    condition: 'read';
    value: boolean;
}

export interface ConditionInterface {
    logged: boolean | null;
    location: LocationInterface | null;
    nuggets: NuggetConditionInterface[] | null;
}
