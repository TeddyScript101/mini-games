import { createSlice } from '@reduxjs/toolkit';

const luckyDrawSlice = createSlice({
    name: 'luckyDraw',
    initialState: {
        theme: null,
        isSpinning: false,
        droppedBall: false,
        showFullScreen: false,
        showCard: true
    },
    reducers: {
        setLuckyDrawTheme: (state, action) => {
            state.theme = action.payload;
        },
        setLuckyDrawIsSpinning: (state, action) => {
            state.isSpinning = action.payload;
        },
        setLuckyDrawDroppedBall: (state, action) => {
            state.droppedBall = action.payload;
        },
        setLuckyDrawShowFullScreen: (state, action) => {
            state.showFullScreen = action.payload;
        },
        setLuckyDrawShowCard: (state, action) => {
            state.showCard = action.payload;
        },
    },
});

export const {
    setLuckyDrawTheme,
    setLuckyDrawIsSpinning,
    setLuckyDrawDroppedBall,
    setLuckyDrawShowFullScreen,
    setLuckyDrawShowCard,
} = luckyDrawSlice.actions;

export default luckyDrawSlice.reducer;
