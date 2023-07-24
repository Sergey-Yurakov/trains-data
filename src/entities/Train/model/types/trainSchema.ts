export interface TrainDataCharacteristics {
    speed: number;
    force: number;
    engineAmperage: number;
}

export interface TrainData {
    name: string;
    description: string;
    characteristics: TrainDataCharacteristics[];
}

export interface TrainSchema {
    trainData: TrainData[];
    isLoading: boolean;
    error?: string;
}
