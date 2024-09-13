import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addCounter: (state, action) => {
      state.counter = ++state.counter;
    },
    delCounter: (state, action) => {
      state.counter = --state.counter;
      if (state.counter < 0) {
        state.counter = 0;
      }
    },
    reset: (state, actions) => {
      state.counter = 0;
    },
  },
});
const { actions, reducer } = counterSlice;
export const { addCounter, delCounter, reset } = actions;
export default reducer;
