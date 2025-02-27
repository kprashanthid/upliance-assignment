import { createSlice } from "@reduxjs/toolkit";

const getSavedCount = () => {
  const savedCount = localStorage.getItem("counterValue");
  return savedCount ? parseInt(savedCount, 10) : 0;
};

const initialState = {
  value: getSavedCount(),
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("counterValue", state.value.toString());
    },
    decrement: (state) => {
      state.value -= 1;
      localStorage.setItem("counterValue", state.value.toString());
    },
    reset: (state) => {
      state.value = 0;
      localStorage.setItem("counterValue", "0");
    },
    setCounter: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("counterValue", action.payload.toString());
    },
  },
});

export const { increment, decrement, reset, setCounter } = counterSlice.actions;
export default counterSlice.reducer;
