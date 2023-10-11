import { configureStore } from "@reduxjs/toolkit";
import { userListReducer } from "../features/User/userSlice";

export const store = configureStore({
  reducer: {
    user : userListReducer
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
