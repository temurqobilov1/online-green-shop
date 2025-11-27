import { createSlice } from "@reduxjs/toolkit";
import { cookiesInfo } from "../../generic/cookies";

interface IUserState {
  user: any | null;
}

const { getCookies } = cookiesInfo();

const initialState: IUserState = {
  user: getCookies("user"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, { payload }) {
      state.user = payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
