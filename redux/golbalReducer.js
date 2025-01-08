import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  wishlist: [],
};

export const dataSlice = createSlice({
  name: 'ecommerceGlobalData',
  initialState,
  reducers: {
    // cart handling
    doSomething: (state, action) => {},
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
      console.log('added to cart');
    },
    addToWishlist: (state, action) => {
      const thereB4 = state.wishlist.filter(
        (wish) => wish.id === action.payload.id
      );
      if (thereB4.length > 0) {
        state.wishlist = state.wishlist.filter(
          (wish) => wish.id !== action.payload.id
        );
        console.log('removed to wishlist');
      } else {
        state.wishlist = [...state.wishlist, action.payload];
        console.log('added to wishlist');
      }
    },
  },
});

export const { addToCart, addToWishlist } = dataSlice.actions;
export default dataSlice.reducer;
