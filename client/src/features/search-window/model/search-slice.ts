import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  searchWindow: false,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    setSearchWindow(state, action: PayloadAction<boolean>) {
      state.searchWindow = action.payload;
    },
  },
});

export const { setSearch, setSearchWindow } = searchSlice.actions;

export default searchSlice.reducer;
