// Ducks pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface  CounterState {
    value: number;
}


export const counterSliceD = createSlice({
    name: 'counterD',
    initialState: {
        value: 0
    },
    reducers: {
        // increement
        incrementedD(state) {
            // It's okay to do this because immet makes it immutable
            // under the hood
            state.value++;
        },
        // decrement
        decrementedD(state) {
            state.value--;
        }
        // reset
    }
});

export const { incrementedD, decrementedD } = counterSliceD.actions;
export default counterSliceD.reducer;