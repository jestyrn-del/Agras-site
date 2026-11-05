export type PinPosition =
    | 'pin-a'
    | 'pin-b'
    | 'pin-c'
    | 'pin-d'
    | 'pin-e'
    | 'pin-f'
    | 'pin-g';

export interface Warehouse {
    id: number;
    regionId: number;
    region: string;
    city: string;
    equipment: {
        model: string;
        quantity: number;
    }[];
    coordinates: [number, number];
    pinPosition: PinPosition;
}

export const warehouses: Warehouse[] = [
    {
        id: 1,
        regionId: 3,
        region: 'Республика Бурятия',
        city: 'Улан-Удэ',
        equipment: [
            { model: 'HD580', quantity: 30 },
        ],
        coordinates: [107.584, 51.834],
        pinPosition: 'pin-a',
    },
];