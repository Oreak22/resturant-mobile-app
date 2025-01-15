import {
	View,
	Text,
	StyleSheet,
	Touchable,
	TouchableOpacity,
} from "react-native";
import React from "react";

const Radio = ({ setHow, how, details, index }) => {
	return (
		<View
			style={{
				flexDirection: "row",
				width: "100%",
				alignItems: "flex-start",
				borderBottomColor: "rgba(0,0,0,0.3)",
				borderTopColor: "rgba(0,0,0,0.3)",
				borderTopWidth: how == `${"D" + (index + 1)}` ? 0.5 : 0,
				borderBottomWidth: how == `${"D" + (index + 1)}` ? 0.5 : 0,
				backgroundColor: how == `${"D" + (index + 1)}` ? "#F5f5fa" : "white",
				padding: 10,
			}}
		>
			<View style={{ width: "20%", justifyContent: "center" }}>
				<TouchableOpacity
					onPress={() => {
						setHow(details.label);
						console.log(how);
					}}
					style={[
						{
							width: 35,
							height: 35,
							borderRadius: 30,
							justifyContent: "center",
							alignItems: "center",
							backgroundColor:
								how == `${"D" + (index + 1)}` ? "#1E618C" : "white",
						},
						styles.shadow,
					]}
				>
					<View
						style={{
							backgroundColor: "white",
							width: 15,
							height: 15,
							borderRadius: 10,
						}}
					></View>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flexDirection: "column",
					height: 100,
					justifyContent: "space-between",
				}}
			>
				<View style={{ flexDirection: "row" }}>
					<Text style={{ fontSize: 20, fontWeight: "400" }}>
						{details.price}
						{"  "}
					</Text>
					<Text style={{ fontSize: 20 }}>{details.to}</Text>
				</View>
				<Text style={{ fontSize: 18, color: "rgba(0,0,0,0.4)" }}>
					{details.duration}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		borderWidth: 1,
		borderColor: "rgba(0,0,0,0.3)",
	},
});
export default Radio;
