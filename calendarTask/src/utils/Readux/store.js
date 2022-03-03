import { configureStore } from '@reduxjs/toolkit';
import daySlice from './calendarSlice';

export const store = configureStore ({
    reducer:{
        dayState: daySlice,
    },
})