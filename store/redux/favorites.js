import { createSlice } from "@reduxjs/toolkit";

const initialFavoriteState = { ids: [] };

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavoriteState,
  reducers: {
    addFavorite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const favoriteActions = favoritesSlice.actions;

export default favoritesSlice.reducer;
