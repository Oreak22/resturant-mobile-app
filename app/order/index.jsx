import {
	View,
	Text,
	Dimensions,
	Platform,
	StatusBar,
	TouchableOpacity,
	Button,
	ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import ProfieBar from "../../components/ProfieBar";
import { useSelector } from "react-redux";
import BottomNav from "../../components/BottomNav";
import HistoryDispay from "../../components/HistoryDispay.";
import AsyncStorage from "@react-native-async-storage/async-storage";

const index = () => {
	const userEmail = useSelector((state) => state.globalReducer.userId);
	const [userHistory, setUserHistory] = useState([]);
	const [currentPage, setCurrentPage] = useState("PENDING");
	const getHistory = async () => {
		const getRecords = await AsyncStorage.getItem("userRecord");
		const userRecord = await JSON.parse(getRecords);
		const thisUserRecords = await userRecord.filter(
			(record) => record.userEmail === userEmail,
		);
		const userHistory = await userRecord[0].history;
		setUserHistory(userHistory);
		console.log(userHistory);
	};
	const currentData = userHistory.filter((item) => item.status == currentPage);
	console.log();
	useEffect(() => {
		getHistory();
	}, [0]);

	return (
		<>
			<StatusBar animated backgroundColor={"white"} barStyle={"dark-content"} />
			<ProfieBar title={"My Orders"} />
			<SafeAreaView style={styles.container}>
				<ScrollView>
					<View style={styles.flexBtn}>
						<TouchableOpacity
							style={[
								styles.orderBtn,
								{
									backgroundColor: currentPage == "PENDING" ? "black" : "white",
								},
							]}
							onPress={() => setCurrentPage("PENDING" || "pending")}
						>
							<Text
								style={{
									color: currentPage == "PENDING" ? "white" : "black",
									textAlign: "center",
									width: "100%",
								}}
							>
								Pending
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								styles.orderBtn,
								{
									backgroundColor:
										currentPage == "DELIVERED" ? "black" : "white",
								},
							]}
							onPress={() => setCurrentPage("DELIVERED")}
						>
							<Text
								style={{
									color: currentPage == "DELIVERED" ? "white" : "black",
									textAlign: "center",
									width: "100%",
								}}
							>
								Delivered
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={[
								styles.orderBtn,
								{
									backgroundColor:
										currentPage == "CANCELLED" ? "black" : "white",
								},
							]}
							onPress={() => setCurrentPage("CANCELLED")}
						>
							<Text
								style={{
									color: currentPage == "CANCELLED" ? "white" : "black",
									textAlign: "center",
									width: "100%",
								}}
							>
								Cancelled
							</Text>
						</TouchableOpacity>
					</View>
					{currentData.length >= 1 ? (
						<View style={{ paddingVertical: 20 }}>
							{currentData.map((record, index) => (
								<HistoryDispay record={record} key={index} />
							))}
						</View>
					) : (
						<View
							style={{
								height: 60,
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Text
								style={{ textAlign: "center", fontSize: 25, fontWeight: "900" }}
							>
								No Record Found
							</Text>
						</View>
					)}
				</ScrollView>
			</SafeAreaView>
			<BottomNav order={true} />
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 70 : 90,
		minHeight: Dimensions.get("window").height,
		backgroundColor: "white",
		// paddingHorizontal: 20,
	},
	flexBtn: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "90%",
		marginHorizontal: "auto",
		alignContent: "center",
		paddingVertical: 10,
		paddingHorizontal: 5,
	},
	orderBtn: {
		width: "30%",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
		paddingVertical: 15,
	},
});
export default index;
