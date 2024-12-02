import { createSlice } from '@reduxjs/toolkit';

const luckyDrawSlice = createSlice({
    name: 'luckyDraw',
    initialState: {
        theme: null,
        isSpinning: false,
        droppedBall: false,
        showFullScreen: false,
        showCard: false
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload
        },
        setIsSpinning: (state, action) => {
            state.isSpinning = action.payload
        },
        setDroppedBall: (state, action) => {
            state.droppedBall = action.payload
        },
        setShowFullScreen: (state, action) => {
            state.showFullScreen = action.payload
        },
        setShowCard: (state, action) => {
            state.showCard = action.payload
        },

    },
});

export const { setTheme, setIsSpinning, setDroppedBall, setShowFullScreen, setShowCard } = luckyDrawSlice.actions;
export default luckyDrawSlice.reducer;
