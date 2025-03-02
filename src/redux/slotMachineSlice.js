import { createSlice } from '@reduxjs/toolkit';

const slotMachineSlice = createSlice({
    name: 'slotMachine',
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
        setSlotMachineTheme: (state, action) => {
            state.theme = action.payload;
        },
        setSlotMachineShowFullScreen: (state, action) => {
            state.showFullScreen = action.payload;
        },
        setSlotMachineShowCard: (state, action) => {
            state.showCard = action.payload;
        },
        setSlotMachineRunning: (state, action) => {
            state.isRunning = action.payload;
        },
        setSlotMachineHighlightedIndex: (state, action) => {
            state.highlightedIndex = action.payload;
        },
        setSlotMachineResult: (state, action) => {
            state.result = action.payload;
        },
        setSlotMachineIsFinished: (state, action) => {
            state.isFinished = action.payload;
        },
        
    },
});

export const {
    setSlotMachineTheme,
    setSlotMachineShowFullScreen,
    setSlotMachineShowCard,
    setSlotMachineRunning,
    setSlotMachineHighlightedIndex,
    setSlotMachineResult,
    setSlotMachineIsFinished
} = slotMachineSlice.actions;

export default slotMachineSlice.reducer;
