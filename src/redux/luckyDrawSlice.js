import { createSlice } from '@reduxjs/toolkit';

const luckyDrawSlice = createSlice({
    name: 'luckyDraw',
    initialState: {
        theme: null,
        showFullScreen: false,
        showCard: true,
        isRunning: false,
        highlightedIndex: null,
        result: null,
        isFinished:false
    },
    reducers: {
        setLuckyDrawTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLuckyDrawShowFullScreen: (state, action) => {
            state.showFullScreen = action.payload;
        },
        setLuckyDrawShowCard: (state, action) => {
            state.showCard = action.payload;
        },
        setLuckyDrawRunning: (state, action) => {
            state.isRunning = action.payload;
        },
        setLuckyDrawHighlightedIndex: (state, action) => {
            state.highlightedIndex = action.payload;
        },
        setLuckyDrawResult: (state, action) => {
            state.result = action.payload;
        },
        setLuckyDrawIsFinished: (state, action) => {
            state.isFinished = action.payload;
        },
        
    },
});

export const {
    setLuckyDrawTheme,
    setLuckyDrawShowFullScreen,
    setLuckyDrawShowCard,
    setLuckyDrawRunning,
    setLuckyDrawHighlightedIndex,
    setLuckyDrawResult,
    setLuckyDrawIsFinished
} = luckyDrawSlice.actions;

export default luckyDrawSlice.reducer;
