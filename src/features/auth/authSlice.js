import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    storeUser: (state, action) => {
      console.log("State of user", state, "action ", action);
      state.user = action.payload;
    },
  },
});

export const { storeUser } = authSlice.actions;

export const selectLoggedInUser = (state) => state.auth.user;

export default authSlice.reducer;
