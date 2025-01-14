import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	Image,
	ScrollView,
	Modal,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome6 } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import AntDesign from "@expo/vector-icons/AntDesign";
import Items from "./Items";
import CheckOut from "./CheckOut";

const Cart = ({ setCart }) => {
	const [amount, setAmount] = useState(1);
	const cartItems = useSelector((state) => state.globalReducer.cart);
	const [order, setOrder] = useState([]);
	const prices = cartItems.map((item) => item.price * item.amount);
	const totalPrice = prices.reduce((a, b) => a + b, 0);
	const [checkOut, setcheckOut] = useState(false);

	return (
		<>
			<View style={[styles.container, { justifyContent: "center" }]}>
				<TouchableOpacity
					onPress={() => setCart(false)}
					style={[
						{
							width: 50,
							height: 50,
							borderRadius: "50%",
							justifyContent: "center",
							alignItems: "center",
							flexDirection: "row",
							position: "absolute",
							left: 20,
						},
						styles.backbtn,
					]}
				>
					<FontAwesome6 name='angle-left' size={28} color='black' />
				</TouchableOpacity>
				<Text
					style={{
						fontSize: 25,
						fontWeight: "800",
					}}
				>
					Your Cart
				</Text>
			</View>
			<View>
				{cartItems.length < 1 ? (
					<View
						style={{
							paddingVertical: 20,
							height: 0.7 * Dimensions.get("window").height,
							alignItems: "center",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<Text
							style={{ textAlign: "center", fontSize: 24, fontWeight: "300" }}
						>
							Your Cart Is Empty {"\n"}{" "}
							<TouchableOpacity
								onPress={() => setCart(false)}
								style={{
									paddingVertical: 0,
								}}
							>
								<Text
									style={{
										textAlign: "center",
										fontSize: 24,
										fontWeight: "800",
										paddingVertical: 0,
									}}
								>
									Explore
								</Text>
							</TouchableOpacity>{" "}
							and add to Your Cart
						</Text>
					</View>
				) : (
					<View
						style={{ flexDirection: "column", justifyContent: "space-between" }}
					>
						<View
							style={{
								height: 0.65 * Dimensions.get("window").height,
								width: "100%",
							}}
						>
							<ScrollView
								indicatorStyle='white'
								scrollIndicatorInsets={false}
								style={{ minHeight: "100%", flexDirection: "column" }}
							>
								{cartItems.map((orderedItem, index) => (
									<Items
										order={order}
										setOrder={setOrder}
										index={index}
										key={index}
										orderedItem={orderedItem}
									/>
								))}
							</ScrollView>
						</View>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "row",
								height: 0.3 * Dimensions.get("window").height,
								width: "90%",
								marginHorizontal: "auto",
							}}
						>
							<View style={{ width: "100%" }}>
								<View style={styles.priceSummary}>
									<Text style={styles.summaryTextLabel}>Product Price</Text>
									<Text style={styles.priceDisplay}>${totalPrice}</Text>
								</View>
								<View style={styles.priceSummary}>
									<Text style={styles.summaryTextLabel}>Shipping</Text>
									<Text style={styles.priceDisplay}>Freeshipping</Text>
								</View>
								<View style={[styles.priceSummary, { borderBottomWidth: 0 }]}>
									<Text style={{ fontWeight: "800", fontSize: 20 }}>
										Subtotal
									</Text>
									<Text style={{ fontSize: 18, fontWeight: "900" }}>
										${totalPrice}
									</Text>
								</View>
								<TouchableOpacity
									style={{
										backgroundColor: "black",
										paddingVertical: 15,
										width: "100%",
										marginVertical: 10,
										borderRadius: 30,
									}}
									onPress={() => setcheckOut(true)}
								>
									<Text
										style={{
											color: "white",
											textAlign: "center",
											fontSize: 20,
											fontWeight: "800",
										}}
									>
										Proceed to checkout
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				)}
			</View>
			<Modal visible={checkOut} transparent={false}>
				<CheckOut setCheckout={setcheckOut} />
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(0,0,0,0)",
		flexDirection: "row",
		// paddingHorizontal: 20,
		paddingVertical: 20,
		width: "100%",
		alignItems: "center",
		position: "relative",
	},
	backbtn: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
		backgroundColor: "white",
		marginRight: 20,
	},
	items: {
		marginVertical: 0.02 * Dimensions.get("window").height,
		width: "100%",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 8,
		backgroundColor: "white",
		marginRight: 20,
		height: 180,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		borderRadius: 20,
	},
	editAmount: {
		paddingVertical: 3,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
	priceSummary: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingVertical: 15,
		borderBottomColor: "rgba(0,0,0,0.2)",
		borderBottomWidth: 0.5,
	},
	summaryTextLabel: {
		fontSize: 20,
	},
	priceDisplay: {
		fontSize: 20,
		fontWeight: "300",
	},
});

export default Cart;
