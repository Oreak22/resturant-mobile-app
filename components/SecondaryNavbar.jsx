import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";

const SecondaryNavbar = ({ title, centered }) => {
	return (
		<View
			style={[
				styles.container,
				{ justifyContent: centered && "space-between" },
			]}
		>
			<TouchableOpacity
				onPress={() => router.back()}
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
					backgroundColor: "transparent",
					fontSize: 20,
					fontWeight: "800",
					textAlign: "center",
					margin: "auto",
				}}
			>
				{title}
			</Text>
			{centered && <View></View>}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(0,0,0,0)",
		flexDirection: "row",
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 999,
		paddingHorizontal: 20,
		paddingVertical: 20,
		width: "100%",
		position: "relative",
		alignItems: "center",
		backgroundColor: "white",
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
});

export default SecondaryNavbar;
