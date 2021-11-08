// Ducks pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface  CounterState {
    value: number;
}



export const counterSliceC = createSlice({
    name: 'counterC',
    initialState: {
        value: 0
    },
    reducers: {
        // increement
        incrementedC(state) {
            // It's okay to do this because immet makes it immutable
            // under the hood
            state.value++;
        },
        // decrement
        decrementedC(state) {
            state.value--;
        }
        // reset
    }
});

export const { incrementedC, decrementedC } = counterSliceC.actions;
export default counterSliceC.reducer;