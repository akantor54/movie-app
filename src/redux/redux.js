import { configureStore, createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    getFilm(state, action) {
      state = [...action.payload];
      return state;
    },
  },
});

export const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
  },
});
