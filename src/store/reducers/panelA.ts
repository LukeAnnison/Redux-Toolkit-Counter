// Ducks pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface  CounterState {
    value: number;
}

export const counterSliceA = createSlice({
    name: 'counterA',
    initialState: {
        value: 0
    },
    reducers: {
        // increement
        incrementedA(state) {
            // It's okay to do this because immet makes it immutable
            // under the hood
            state.value++;
        },
        // decrement
        decrementedA(state) {
            state.value--;
        }
        // reset
    }
});

export const { incrementedA, decrementedA } = counterSliceA.actions;
export default counterSliceA.reducer;