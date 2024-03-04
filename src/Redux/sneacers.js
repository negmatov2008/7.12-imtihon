import { createSlice } from "@reduxjs/toolkit";

const SneacersSlice = createSlice({
  name: "Sneacers",
  initialState: {
    activeImage: 1,
  },
  reducers: {
    addImage: (state, { payload }) => {
      state.activeImage = payload;
    },
  },
});

export const { addImage } = SneacersSlice.actions;

export default SneacersSlice.reducer;
