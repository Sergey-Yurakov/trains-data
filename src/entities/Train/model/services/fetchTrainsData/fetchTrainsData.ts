import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { TrainData } from '../../types/trainSchema';

const url =
    'https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json';

export const fetchTrainsData = createAsyncThunk<TrainData[], void, { rejectValue: string }>(
    'train/fetchTrainsData',
    async (_, { rejectWithValue }) => {
        const response = await axios.get<TrainData[]>(url);

        if (!response.data) {
            return rejectWithValue('Server Errors!');
        }

        return response.data;
    }
);
