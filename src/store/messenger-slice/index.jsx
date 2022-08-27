import { createSlice } from "@reduxjs/toolkit";

const messengerSlice = createSlice({
  name: "messenger",
  initialState: {
    isMessengerHidden: true,
  },
  reducers: {
    showMessenger(state) {
      state.isModuleHidden = false;
    },
    hideMessenger(state) {
      state.isModuleHidden = true;
    },
  },
});

export const MESSENGER_REDUCERS = messengerSlice.actions;

export default messengerSlice;
