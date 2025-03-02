import { createSlice } from '@reduxjs/toolkit';

const gachaSlice = createSlice({
    name: 'gacha',
    initialState: {
        theme: null,
        isRunning: false,
        droppedBall: false,
        showFullScreen: false,
        showCard: false,
        result: null
    },
    reducers: {
        setGachaTheme: (state, action) => {
            state.theme = action.payload;
        },
        setGachaIsRunning: (state, action) => {
            state.isRunning = action.payload;
        },
        setGachaDroppedBall: (state, action) => {
            state.droppedBall = action.payload;
        },
        setGachaShowFullScreen: (state, action) => {
            state.showFullScreen = action.payload;
        },
        setGachaShowCard: (state, action) => {
            state.showCard = action.payload;
        },
        setGachaResult: (state, action) => {
            state.result = action.payload;
        },
    },
});

export const {
    setGachaTheme,
    setGachaIsRunning,
    setGachaDroppedBall,
    setGachaShowFullScreen,
    setGachaShowCard, 
    setGachaResult
} = gachaSlice.actions;

export default gachaSlice.reducer;
