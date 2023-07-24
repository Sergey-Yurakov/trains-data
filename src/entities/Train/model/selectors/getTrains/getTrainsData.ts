import { StateSchema } from '@/app/providers/StoreProvider';

export const getTrainsData = (state: StateSchema) => state.trains.trainData;
export const getTrainsError = (state: StateSchema) => state.trains.error || '';
export const getTrainsIsLoading = (state: StateSchema) => state.trains.isLoading || false;
