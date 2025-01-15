import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";

const Dots = () => {
	return (
		<View
			style={{
				width: 20,
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "row",
			}}
		>
			<Text
				style={{
					fontWeight: "900",
					fontSize: 30,
					textAlign: "center",
					lineHeight: 15,
					width: "100%",
				}}
			>
				.{"\n"}.{"\n"}.
			</Text>
		</View>
	);
};
const Tracker = ({ checked }) => {
	return (
		<View
			style={{
				width: 20,
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
				backgroundColor: "white",
				borderRadius: 15,
				borderWidth: 1.5,
				height: 20,
			}}
		>
			<View
				style={{
					width: 13,
					height: 13,
					backgroundColor: "black",
					borderRadius: 113,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				{checked && <FontAwesome name='check' size={10} color={"white"} />}
			</View>
		</View>
	);
};
const Tracking = ({ record }) => {
	const userEmail = useSelector((state) => state.globalReducer.userId);
	const index = async (newRecord) => {
		const data = await AsyncStorage.getItem("userRecord");
		const allData = await JSON.parse(data);
		const thisUser = allData.find((record) => record.email === userEmail);
		const userIndex = allData.findIndex((record) => record.email === userEmail);
		const recordIndex = thisUser.history.findIndex(
			(allHistory, index) => allHistory.id === record.id,
		);
		allData[userIndex].history[recordIndex] = newRecord;
		await AsyncStorage.setItem("userRecord", JSON.stringify(allData));
		return [recordIndex, userIndex];
	};
	const saveIt = async () => {
		const data = await AsyncStorage.getItem("userRecord");
	};
	const delivered = async () => {
		record.status = "DELIVERED";
		console.log(await index(record));
	};
	const Cancelled = async () => {
		record.status = "CANCELLED";
		console.log(await index(record));
	};
	return (
		<View
			style={{
				paddingVertical: 25,
				paddingHorizontal: 20,
				backgroundColor: "white",
				flex: 1,
			}}
		>
			<View>
				<Text style={{ fontSize: 18, marginBottom: 5 }}>
					Delivered on:{" "}
					<Text style={{ fontWeight: "900" }}>
						{" "}
						{record.time.split("T")[0] +
							" " +
							record.time.split("T")[1].split(".")[0]}
					</Text>
				</Text>
				<Text style={{ fontSize: 18, marginTop: 5 }}>
					Tracking Number:{" "}
					<Text style={{ fontWeight: "900" }}> {record.trackingNumber}</Text>
				</Text>
			</View>
			<View style={{ paddingVertical: 30 }}>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Tracker />
					<View
						style={{
							flexDirection: "row",
							width: "90%",
							justifyContent: "space-between",
						}}
					>
						<Text style={{ fontWeight: "800", fontSize: 16 }}>
							Parcel is successfully delivered
						</Text>
						<Text style={{ fontSize: 16, color: "rgba(0,0,0,0.5)" }}>
							15 May {record.time.split("T")[1].split(".")[0]}
						</Text>
					</View>
				</View>
				<Dots />
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Tracker checked={true} />
					<View
						style={{
							flexDirection: "row",
							width: "90%",
							justifyContent: "space-between",
						}}
					>
						<Text style={{ fontWeight: "800", fontSize: 16 }}>
							Parcel is out for delivery
						</Text>
						<Text style={{ fontSize: 16, color: "rgba(0,0,0,0.5)" }}>
							15 May {record.time.split("T")[1].split(".")[0]}
						</Text>
					</View>
				</View>
				<Dots />
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Tracker checked={true} />
					<View
						style={{
							flexDirection: "row",
							width: "90%",
							justifyContent: "space-between",
						}}
					>
						<Text style={{ fontWeight: "800", fontSize: 16 }}>
							Parcel is received at delivery Branch
						</Text>
						<Text style={{ fontSize: 16, color: "rgba(0,0,0,0.5)" }}>
							15 May {record.time.split("T")[1].split(".")[0]}
						</Text>
					</View>
				</View>
				<Dots />
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Tracker checked={true} />
					<View
						style={{
							flexDirection: "row",
							width: "90%",
							justifyContent: "space-between",
						}}
					>
						<Text style={{ fontWeight: "800", fontSize: 16 }}>
							Parcel is in transit
						</Text>
						<Text style={{ fontSize: 16, color: "rgba(0,0,0,0.5)" }}>
							15 May {record.time.split("T")[1].split(".")[0]}
						</Text>
					</View>
				</View>
				<Dots />
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Tracker checked={true} />
					<View
						style={{
							flexDirection: "row",
							width: "90%",
							justifyContent: "space-between",
						}}
					>
						<Text style={{ fontWeight: "800", fontSize: 16 }}>
							Sender has shipped your parcel
						</Text>
						<Text style={{ fontSize: 16, color: "rgba(0,0,0,0.5)" }}>
							15 May {record.time.split("T")[1].split(".")[0]}
						</Text>
					</View>
				</View>
				<Dots />
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					<Tracker checked={true} />
					<View
						style={{
							flexDirection: "row",
							width: "90%",
							justifyContent: "space-between",
						}}
					>
						<Text style={{ fontWeight: "800", fontSize: 16 }}>
							Sender is preparing to ship your order
						</Text>
						<Text style={{ fontSize: 16, color: "rgba(0,0,0,0.5)" }}>
							15 May {record.time.split("T")[1].split(".")[0]}
						</Text>
					</View>
				</View>
			</View>
			<View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
				<TouchableOpacity
					onPress={Cancelled}
					style={[
						{
							width: "35%",
							paddingVertical: 15,
							borderRadius: 25,
							backgroundColor: "black",
						},
						styles.shadow,
					]}
				>
					<Text
						style={{
							textAlign: "center",
							fontWeight: "500",
							fontSize: 16,
							color: "white",
						}}
					>
						Cancle Order
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={delivered}
					style={[
						styles.shadow,
						{
							width: "35%",
							paddingVertical: 15,
							borderRadius: 25,
							backgroundColor: "white",
						},
					]}
				>
					<Text
						style={{ textAlign: "center", fontWeight: "500", fontSize: 16 }}
					>
						Confirm Delivery
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.1,
		shadowRadius: 3,
		elevation: 3,
	},
});

export default Tracking;
