import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../../cartItems";

const initialState = {
  cartItems,
  amount: 0,
  total: 0,
  loading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducer: {},
});

export default cartSlice.reducer;
