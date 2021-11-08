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
        incremented(state) {
            // It's okay to do this because immet makes it immutable
            // under the hood
            state.value++;
        },
        // decrement
        decremented(state) {
            state.value--;
        }
        // reset
    }
});

export const { incremented, decremented } = counterSliceC.actions;
export default counterSliceC.reducer;