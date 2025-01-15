import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { router } from "expo-router";

const HistoryDispay = ({ record }) => {
	const orderDate = record.time.split("T");
	const dummydata = [
		{
			amount: 1,
			color: "050302",
			id: 22,
			img: 40,
			name: "Long Sleeve Dress",
			price: 200,
			size: "M",
		},
		{
			amount: 3,
			color: "EE6969",
			id: 33,
			img: 41,
			name: "sportwear Set",
			price: 300,
			size: "M",
		},
		{
			amount: 2,
			color: "EE6969",
			id: 11,
			img: 37,
			name: "Turtleneck Sweater",
			price: 100,
			size: "M",
		},
	];
	const amount = record.order.map((item) => item.amount);
	const quantity = amount.reduce((a, b) => a + b);
	const totalPay = record.order.map((item) => item.amount * item.price);
	const subtotal = totalPay.reduce((a, b) => a + b);
	const routeToRate = () => {
		if (record.status === "CANCELLED") return;
		router.push(`/order/${record.status}?records=${JSON.stringify(record)}`);
	};
	useEffect(() => {
		console.log(record.order);
	}, []);

	return (
		<View style={[styles.container, { marginVertical: 10 }]}>
			<View style={[styles.spaceBtw, styles.View]}>
				<Text style={{ fontWeight: "900", fontSize: 20 }}>
					Order #{record.id}
				</Text>
				<Text style={{ fontSize: 15, color: "rgba(0,0,0,0.5)" }}>
					{`${orderDate[0]}` + " " + `${orderDate[1].split(".")[0]}`}
				</Text>
			</View>
			<View>
				<Text style={{ fontSize: 15, color: "rgba(0,0,0,0.5)" }}>
					Tracking Number:{" "}
					<Text style={{ fontSize: 17, color: "rgba(0,0,0,1)" }}>
						{record.trackingNumber}
					</Text>
				</Text>
			</View>
			<View style={[styles.spaceBtw, styles.View]}>
				<Text style={{ fontSize: 15, color: "rgba(0,0,0,0.5)" }}>
					Quantity:{" "}
					<Text style={{ fontSize: 17, color: "rgba(0,0,0,1)" }}>
						{quantity}
					</Text>
				</Text>
				<Text style={{ fontSize: 15, color: "rgba(0,0,0,0.5)" }}>
					Subtotal:{" "}
					<Text style={{ fontSize: 17, color: "rgba(0,0,0,1)" }}>
						${subtotal}
					</Text>
				</Text>
			</View>
			<View style={[styles.spaceBtw, styles.View]}>
				<Text
					style={{
						fontSize: 17,
						color:
							record.status == "PENDING"
								? "orange"
								: record.status === "DELIVERED"
								? "green"
								: record.status == "CANCELLED" && "red",
					}}
				>
					{record.status}
				</Text>
				{record.status != "CANCELLED" && (
					<TouchableOpacity style={styles.touch} onPress={routeToRate}>
						<Text style={{ textAlign: "center", fontWeight: "900" }}>
							Details
						</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 8,
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 10,
		backgroundColor: "white",
		marginHorizontal: "auto",
		width: "90%",
	},
	spaceBtw: {
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		flexDirection: "row",
	},
	View: {
		paddingVertical: 10,
	},
	touch: {
		paddingVertical: 10,
		borderColor: "rgba(0,0,0,0.5)",
		borderWidth: 2,
		width: "30%",
		borderRadius: 29,
	},
});

export default HistoryDispay;
