import { configureStore } from '@reduxjs/toolkit';

import { trainsDataReducer } from '../../../../entities/Train';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            trains: trainsDataReducer,
        },
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
