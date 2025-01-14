import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [],
	wishlist: [],
	order: [],
	userId: "",
	history: [],
};

export const dataSlice = createSlice({
	name: "ecommerceGlobalData",
	initialState,
	reducers: {
		// cart handling
		doSomething: (state, action) => {},
		addToCart: (state, action) => {
			state.cart = [...state.cart, action.payload];
			console.log("added to cart");
		},
		addToWishlist: (state, action) => {
			const thereB4 = state.wishlist.filter(
				(wish) => wish.id === action.payload.id,
			);
			if (thereB4.length > 0) {
				state.wishlist = state.wishlist.filter(
					(wish) => wish.id !== action.payload.id,
				);
				console.log("removed to wishlist");
			} else {
				state.wishlist = [...state.wishlist, action.payload];
				console.log("added to wishlist");
			}
		},
		cartOut: (state, action) => {},
		editCart: (state, action) => {
			state.cart = action.payload;
		},
		userId: (state, action) => {
			state.userId = action.payload;
		},
		setHistory: (state, action) => {
			state.history = action.payload;
		},
	},
});

export const { addToCart, addToWishlist, editCart, userId, setHistory } =
	dataSlice.actions;
export default dataSlice.reducer;
