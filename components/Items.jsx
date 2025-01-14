import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Dimensions,
	Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { editCart } from "../redux/golbalReducer";

const Items = ({ orderedItem, index }) => {
	const dispatch = useDispatch();
	const order = useSelector((state) => state.globalReducer.cart);
	const othersMinus = () => order.filter((item) => item.id !== orderedItem.id);
	let newOrderList;

	const edit = () => {
		console.log("o", othersMinus(), newOrderList, "list");
		dispatch(editCart(newOrderList));
	};
	const increase = () => {
		const newOrder = { ...orderedItem, amount: orderedItem.amount + 1 };
		newOrderList = [...othersMinus(), newOrder];
		edit();
	};
	const decrease = async () => {
		if (orderedItem.amount <= 1) return;
		const newOrder = { ...orderedItem, amount: orderedItem.amount - 1 };
		newOrderList = [...othersMinus(), newOrder];
		edit();
	};
	const deleteItem = () => {
		newOrderList = othersMinus();
		dispatch(editCart(newOrderList));
	};
	useEffect(() => {}, [0]);

	return (
		<View key={orderedItem.id} style={styles.items}>
			<View style={{ width: "30%", height: "100%" }}>
				<Image
					source={orderedItem.img}
					style={{ height: "100%", width: "100%" }}
					resizeMethod='resize'
				/>
			</View>
			<View
				style={{
					width: "70%",
					flexDirection: "column",
					justifyContent: "space-evenly",
					height: "100%",
					paddingRight: "3%",
					paddingLeft: "3%",
				}}
			>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "700",
							width: "85%",
							overflow: "hidden",
						}}
					>
						{orderedItem.name}
					</Text>
					<TouchableOpacity
						style={{
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "black",
							width: "13%",
							aspectRatio: 1 / 1,
							borderRadius: 5,
						}}
						onPress={deleteItem}
					>
						<AntDesign name='delete' size={24} color='white' />
					</TouchableOpacity>
				</View>
				<Text style={{ fontSize: 20, fontWeight: "700" }}>
					$ {orderedItem.price}
				</Text>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}
				>
					<Text style={{ fontSize: 17, color: "rgba(0,0,0,0.6)" }}>
						Size: {orderedItem.size} | Color: {orderedItem.color}
					</Text>
					<View
						style={[
							styles.editAmount,
							{ width: "35%", color: "rgba(0,0,0,0.6)" },
						]}
					>
						<TouchableOpacity style={styles.btn} onPress={decrease}>
							<FontAwesome name='minus' color={"rgba(0,0,0,0.6)"} size={18} />
						</TouchableOpacity>
						<Text
							style={[
								{ color: "rgba(0,0,0,0.6)", fontSize: 20, fontWeight: "700" },
							]}
						>
							{orderedItem.amount}
						</Text>
						<TouchableOpacity style={styles.btn} onPress={increase}>
							<FontAwesome name='plus' color={"rgba(0,0,0,0.6)"} size={18} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(0,0,0,0)",
		flexDirection: "row",
		paddingHorizontal: 20,
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
		width: "90%",
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
		margin: "auto",
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
		backgroundColor: "white",
		borderRadius: 20,
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "rgba(0,0,0,0.3)",
	},
	btn: {
		width: "32%",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		height: 20,
	},
});

export default Items;
