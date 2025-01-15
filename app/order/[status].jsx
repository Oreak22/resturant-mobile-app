import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import Tracking from "../../components/Tracking";
import Delivered from "../../components/Delivered";
import SecondaryNavbar from "../../components/SecondaryNavbar";

const performAction = () => {
	const { status, records } = useLocalSearchParams();
	console.log(status);
	return (
		<>
			<SecondaryNavbar title={"Track Order"} centered={true} />
			<ScrollView refreshControl={true}>
				{status === "PENDING" ? (
					<Tracking record={JSON.parse(records)} />
				) : (
					<Delivered />
				)}
			</ScrollView>
		</>
	);
};

export default performAction;
