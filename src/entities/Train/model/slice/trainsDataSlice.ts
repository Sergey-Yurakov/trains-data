import { createSlice } from '@reduxjs/toolkit';

import { fetchTrainsData } from '../services/fetchTrainsData/fetchTrainsData';
import { TrainSchema } from '../types/trainSchema';

const initialState: TrainSchema = {
    isLoading: false,
    error: '',
    trainData: [],
};

export const trainsDataSlice = createSlice({
    name: 'trainData',
    initialState,
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(fetchTrainsData.pending, state => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTrainsData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.trainData = action.payload;
            })
            .addCase(fetchTrainsData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: trainsDataReducer } = trainsDataSlice;
export const { actions: trainsDataActions } = trainsDataSlice;
