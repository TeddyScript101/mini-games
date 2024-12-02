import { configureStore } from '@reduxjs/toolkit';
import gachaReducer from './gachaSlice'
import luckyDrawReducer from './luckyDrawSlice'
const store = configureStore({
    reducer: {
        gacha: gachaReducer,
        luckyDraw:luckyDrawReducer
    },
});

export default store;
