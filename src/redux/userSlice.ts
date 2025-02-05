// src/redux/userSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  bio: string;
  unsavedChanges: boolean;
};

const generateUserId = () => `user-${Math.floor(Math.random() * 100000)}`;

const initialState: UserState = {
  id: generateUserId(),
  name: "",
  email: "",
  phone: "",
  address: "",
  bio: "",
  unsavedChanges: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<UserState>>) => {
      Object.assign(state, action.payload);
      state.unsavedChanges = true;
    },
    saveUser: (state) => {
      localStorage.setItem("userData", JSON.stringify(state));
      state.unsavedChanges = false;
    },
    loadUser: (state) => {
      const storedUser = localStorage.getItem("userData");
      if (storedUser) Object.assign(state, JSON.parse(storedUser));
    },
  },
});

export const { updateUser, saveUser, loadUser } = userSlice.actions;
export default userSlice.reducer;
