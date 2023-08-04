import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'Counter',
    initialState: {
        value: 50

    },
    reducers: {
        increment: (state) => {
            state.value = state.value + 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        reset: (state) => {
            state.value = 0
        },
        incrementByNumber: (state, data) => {
            console.log(typeof data.payload)
            state.value = state.value + Number(data.payload);
        }
    }
})

export default counterSlice.reducer;

export const { increment, decrement, reset, incrementByNumber } = counterSlice.actions