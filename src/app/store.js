import {configureStore} from "@reduxjs/toolkit";
import stats from '../features/stats/statsSlice.js';
import user from '../features/user/userSlice.js';

export const store = configureStore({
    reducer: {
        stats, user
    }
})

