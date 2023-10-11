import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface User {
  id: number;
  name: string;
  email: string;
  title : string;
  role:string;
  password:string;
}

const initialState: Array<User> = [
  {
    id: 1,
    name: "Aravind",
    email: "aravind@gmail.com",
    title:"UI Dev",
    role: "Admin",
    password: "1234"
  },
];

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});


export const {addUser} = userSlice.actions;
export const userSelector = (state:RootState) => state.user;
export const  userListReducer = userSlice.reducer;
