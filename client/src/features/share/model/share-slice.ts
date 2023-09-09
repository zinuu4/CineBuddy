import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  shareModal: false,
};

const shareModalSlice = createSlice({
  name: 'shareModal',
  initialState,
  reducers: {
    setShareModal(state, action: PayloadAction<boolean>) {
      state.shareModal = action.payload;
    },
  },
});

export const { setShareModal } = shareModalSlice.actions;

export default shareModalSlice.reducer;
