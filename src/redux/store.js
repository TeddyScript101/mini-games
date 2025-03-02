import { configureStore } from '@reduxjs/toolkit';
import gachaReducer from './gachaSlice'
import luckyDrawReducer from './luckyDrawSlice'
import slotMachineReducer from './slotMachineSlice'
import { storeKeyEnum } from '../const';
const store = configureStore({
    reducer: {
        [storeKeyEnum.gacha]: gachaReducer,
        [storeKeyEnum.luckyDraw]: luckyDrawReducer,
        [storeKeyEnum.slotMachine]: slotMachineReducer
    },
});

export default store;
