import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        value: 50

    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0
        },
    }
})

export default counterSlice.reducer;

export const { increment, decrement, reset } = counterSlice.actions