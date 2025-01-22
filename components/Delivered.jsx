import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

const Delivered = ({ record }) => {
	console.log(record.order);
	const subTotal = record.order
		.map((item) => item.amount * item.price)
		.reduce((a, b) => a + b, 0);
	return (
		<View
			style={[
				{
					flex: 1,
					backgroundColor: "white",
					paddingHorizontal: 20,
					paddingVertical: 25,
					minHeight: "100%",
				},
			]}
		>
			<View style={styles.narative}>
				<View
					style={{
						width: "80%",
						height: 70,
						justifyContent: "space-between",
						flexDirection: "column",
					}}
				>
					<Text style={{ color: "white", fontSize: 25, fontWeight: "500" }}>
						Your order is delivered
					</Text>
					<Text style={{ color: "white", fontSize: 15 }}>
						Rate product to get 5 points for collect.
					</Text>
				</View>
				<MaterialCommunityIcons
					name='truck-delivery-outline'
					size={50}
					color='white'
				/>
			</View>
			<View style={styles.details}>
				<View style={styles.spaceBetween}>
					<Text
						style={{
							color: "rgba(0,0,0,0.5)",
							fontSize: 18,
							fontWeight: "500",
						}}
					>
						Order Number
					</Text>
					<Text style={{ color: "black", fontSize: 18, fontWeight: "500" }}>
						#{record.id}
					</Text>
				</View>

				<View style={styles.spaceBetween}>
					<Text
						style={{
							color: "rgba(0,0,0,0.5)",
							fontSize: 18,
							fontWeight: "500",
						}}
					>
						Tracking Number
					</Text>
					<Text style={{ color: "black", fontSize: 18, fontWeight: "500" }}>
						#{record.id}
					</Text>
				</View>

				<View style={styles.spaceBetween}>
					<Text
						style={{
							color: "rgba(0,0,0,0.5)",
							fontSize: 18,
							fontWeight: "500",
						}}
					>
						Delivery address
					</Text>
					<Text style={{ color: "black", fontSize: 18, fontWeight: "500" }}>
						SBI Building, Software Park
					</Text>
				</View>
			</View>

			<View style={[styles.details, { paddingBottom: 30 }]}>
				{record.order.map((item) => (
					<View style={styles.spaceBetween} key={item.id}>
						<Text
							style={{
								color: "rgba(0,0,0,0.5)",
								fontSize: 20,
								fontWeight: "500",
								width: "50%",
							}}
						>
							{item.name}
						</Text>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								width: "40%",
							}}
						>
							<Text
								style={{
									color: "black",
									fontSize: 18,
									fontWeight: "500",
								}}
							>
								{"X" + item.amount}
							</Text>
							<Text
								style={{
									color: "black",
									fontSize: 18,
									fontWeight: "500",
								}}
							>
								{"$" + item.price}
							</Text>
						</View>
					</View>
				))}
				<View
					style={{
						marginTop: 25,
						borderBottomColor: "rgba(0,0,0,0.2)",
						borderBottomWidth: 1,
						paddingVertical: 10,
					}}
				>
					<View style={[styles.spaceBetween]}>
						<Text
							style={{
								color: "rgba(0,0,0,0.5)",
								fontSize: 20,
								fontWeight: "500",
							}}
						>
							Subtotal
						</Text>
						<Text
							style={{
								color: "black",
								fontSize: 18,
								fontWeight: "500",
							}}
						>
							{subTotal}
						</Text>
					</View>
					<View style={[styles.spaceBetween]}>
						<Text
							style={{
								color: "rgba(0,0,0,0.5)",
								fontSize: 20,
								fontWeight: "500",
							}}
						>
							Shipping
						</Text>
						<Text
							style={{
								color: "black",
								fontSize: 18,
								fontWeight: "500",
							}}
						>
							0.00
						</Text>
					</View>
				</View>

				<View style={[styles.spaceBetween]}>
					<Text
						style={{
							fontSize: 20,
							fontWeight: "100",
						}}
					>
						Total
					</Text>
					<Text
						style={{
							color: "black",
							fontSize: 18,
							fontWeight: "500",
						}}
					>
						${subTotal}
					</Text>
				</View>
			</View>

			<View style={[styles.spaceBetween]}>
				<TouchableOpacity style={[styles.btn, { backgroundColor: "white" }]}>
					<Text
						style={{
							textAlign: "center",
							color: "black",
							fontWeight: "800",
							fontSize: 20,
						}}
					>
						Retun home
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.btn, { backgroundColor: "black" }]}>
					<Text
						style={{
							textAlign: "center",
							color: "white",
							fontWeight: "800",
							fontSize: 20,
						}}
					>
						Rate
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	narative: {
		backgroundColor: "black",
		marginVertical: 20,
		padding: 25,
		flexDirection: "row",
		justifyContent: "space-between",
		borderRadius: 15,
		alignItems: "center",
	},
	details: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		elevation: 1,
		backgroundColor: "white",
		padding: 10,
		borderRadius: 15,
		marginVertical: 15,
	},
	spaceBetween: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 10,
	},
	btn: {
		shadowColor: "#000",
		shadowOffset: {
			width: 1,
			height: 1.8,
		},
		elevation: 1,
		paddingVertical: 18,
		paddingHorizontal: 35,
		borderRadius: 25,
	},
});
export default Delivered;
