import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const Input = ({ value, setValue, placeholder }) => {
	const [danger, setDanger] = useState(false);
	const [dirty, setDirty] = useState(false);
	return (
		<View>
			{dirty && (
				<View style={{ paddingVertical: 15 }}>
					<View style={{ flexDirection: "row", alignItems: "flex-start" }}>
						<Text style={{ fontSize: 18, color: "rgba(0,0,0,0.4)" }}>
							{placeholder}{" "}
						</Text>
						<FontAwesome
							name='star'
							size={7}
							color={danger ? "red" : "green"}
						/>
					</View>
					<KeyboardAvoidingView behavior='padding'>
						<TextInput
							placeholder={placeholder}
							value={value}
							onChangeText={(text) => setValue(text)}
							autoFocus={true}
							onEndEditing={() => {
								if (value.trim() === "") {
									setDanger(true);
								} else setDanger(false);
							}}
							style={{
								fontWeight: "300",
								fontSize: 20,
								borderBottomColor: !danger ? "rgba(0,0,0,0.2)" : "red",
								borderBottomWidth: 0.5,
							}}
						/>
					</KeyboardAvoidingView>
				</View>
			)}
			{!dirty && (
				<TouchableOpacity
					style={{
						flexDirection: "row",
						alignItems: "flex-start",
						borderBottomColor: "rgba(0,0,0,0.2)",
						borderBottomWidth: 0.5,
						paddingVertical: 20,
					}}
					onPress={() => setDirty(true)}
				>
					<Text style={{ fontSize: 20, color: "rgba(0,0,0,0.4)" }}>
						{placeholder}{" "}
					</Text>
					<FontAwesome name='star' size={7} color={danger ? "red" : "green"} />
				</TouchableOpacity>
			)}

			{danger && (
				<Text style={{ fontSize: 14, color: "red", paddingVertical: 3 }}>
					Field is required
				</Text>
			)}
		</View>
	);
};

export default Input;
