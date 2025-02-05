import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  user: { name: string; email: string; photo: string } | null;
};

const storedUser = localStorage.getItem("authUser");
const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState["user"]>) => {
      state.user = action.payload;
      localStorage.setItem("authUser", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("authUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
