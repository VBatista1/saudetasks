import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "utils/types";
import type { RootState } from "redux/store";

const initialState: User = {
  id: 0,
  name: "",
  email: "",
  gender: "",
  status: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});

export const { addUser } = userSlice.actions;

export const selectUser = (state: RootState) => state;

export default userSlice.reducer;
