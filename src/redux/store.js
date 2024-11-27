import { configureStore } from '@reduxjs/toolkit';
import gachaReducer from './gachaSlice'
const store = configureStore({
    reducer: {
        gacha: gachaReducer
    },
});

export default store;
