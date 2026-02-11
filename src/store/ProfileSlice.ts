import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ProfileData } from "../pages/profile/types";

const initialState = {
  firstName: "Toji",
  email: "toji3mk@gmail.com",
  location: "Egypt",
  phoneNumber: "+201234567890",
  profileImage: "/profileImg.jpg",
};
const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<ProfileData>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { updateProfile } = profileSlice.actions;
export default profileSlice.reducer;
