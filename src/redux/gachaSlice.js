import { createSlice } from '@reduxjs/toolkit';

const gachaSlice = createSlice({
    name: 'gacha',
    initialState: {
        theme: null,
        isSpinning: false,
        droppedBall: false,
        showFullScreen: false,
        showCard: false
    },
    reducers: {
        setGachaTheme: (state, action) => {
            state.theme = action.payload;
        },
        setGachaIsSpinning: (state, action) => {
            state.isSpinning = action.payload;
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
    },
});

export const {
    setGachaTheme,
    setGachaIsSpinning,
    setGachaDroppedBall,
    setGachaShowFullScreen,
    setGachaShowCard,
} = gachaSlice.actions;

export default gachaSlice.reducer;
