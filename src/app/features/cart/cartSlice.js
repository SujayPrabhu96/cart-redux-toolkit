import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://course-api.com/react-useReducer-cart-project";

const initialState = {
  cartItems: [],
  count: 1,
  total: 0,
  loading: true,
};

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong!!!");
    }
  }
);

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
      cartItem.amount++;
    },
    decrease: (state, { payload: itemId }) => {
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount--;
    },
    calculateTotal: (state) => {
      let count = 0;
      let total = 0;
      state.cartItems?.map((item) => {
        count += item.amount;
        total += item.amount * item.price;
      });
      state.count = count;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line no-unused-expressions
    builder.addCase(getCartItems.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getCartItems.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.cartItems = payload;
      }),
      builder.addCase(getCartItems.rejected, (state, { payload }) => {
        state.loading = false;
      });
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
