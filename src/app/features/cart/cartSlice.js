import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../../cartItems";

const initialState = {
  cartItems,
  count: 1,
  total: 0,
  loading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload: itemId }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload: itemId }) => {
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.count++;
    },
    decrease: (state, { payload: itemId }) => {
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.count--;
    },
    calculateTotal: (state) => {
      let count = 0;
      let total = 0;
      state.cartItems.map((item) => {
        count += item.count;
        total += item.count * item.price;
      });
      state.count = count;
      state.total = total;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
