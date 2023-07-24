import { configureStore } from '@reduxjs/toolkit';

import { counterReducers } from '../../../../entities/Counter';
import { trainsDataReducer } from '../../../../entities/Train';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducers,
            trains: trainsDataReducer,
        },
        preloadedState: initialState,
    });
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
