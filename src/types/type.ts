export interface Car {
    id: string;
    make: string;
    model: string;
    year: number;
    vin?: string;
    engine_type?: string;
    fuel_type?: string;
    transmission?: string;
}

export interface CarListProps {
    cars: Car[];
}

export interface FilterFormProps {
    onSearch: (filters: { make: string; model: string; year: string }) => void;
}