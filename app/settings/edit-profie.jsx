import React, { useEffect, useState } from "react";
import {
	Image,
	Platform,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import SecondaryNavbar from "../../components/SecondaryNavbar";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Input from "../../components/Input";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

const EditProfie = () => {
	const userEmail = useSelector((state) => state.globalReducer.userId);
	// const [thisUser, setthisUser] = useState();
	const [firstName, setfirstName] = useState("");
	const [lastName, setlastName] = useState("");
	const [email, setemail] = useState("");
	const [phone, setPhone] = useState("");
	const [gender, setGender] = useState("");
	const getIt = async () => {
		const data = await AsyncStorage.getItem("userRecord");
		const records = await JSON.parse(data);
		const thisUser = await records.find((record) => record.email === userEmail);
		// const fName = thisUser.name.spilt(' ')[0]
		// const lName = thisUser.name.spilt(' ')[1]
		setemail(thisUser.email);
		setPhone(thisUser.phone || "");
		setfirstName(`${thisUser.name.split(" ")[0]} `);
		setlastName(`${thisUser.name.split(" ")[1]}`);
		setGender(thisUser.gender || "");
	};
	useEffect(() => {
		getIt();
	}, []);
	return (
		<>
			<StatusBar backgroundColor='white' barStyle={"dark-content"} />
			<SafeAreaView style={styles.container}>
				<SecondaryNavbar centered={true} title={"Profie Settings"} />
				<View
					style={{
						justifyContent: "center",
						flexDirection: "row",
						marginVertical: 25,
					}}
				>
					<View style={{ position: "relative" }}>
						<View style={[styles.profiePicBg]}>
							<Image
								source={require("../../assets/img/hangout collection.png")}
								style={{ width: "100%" }}
								resizeMode='center'
								resizeMethod='resize'
							/>
						</View>
						<TouchableOpacity style={[styles.inputPic]}>
							<EvilIcons
								name='camera'
								size={30}
								color='white'
								style={{
									paddingBottom: 8,
									justifyContent: "center",
									alignItems: "center",
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ paddingVertical: 50 }}>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<View style={{ width: "59%" }}>
							<Input
								placeholder={"First Name"}
								value={firstName}
								setValue={setfirstName}
							/>
						</View>
						<View style={{ width: "39%" }}>
							<Input
								placeholder={"Last Name"}
								value={lastName}
								setValue={setlastName}
							/>
						</View>
					</View>
					<View>
						<Input placeholder={"Email"} value={email} setValue={setemail} />
					</View>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<View style={{ width: "29%" }}>
							<Input
								placeholder={"Gender"}
								value={gender}
								setValue={setGender}
							/>
						</View>
						<View style={{ width: "69%" }}>
							<Input placeholder={"Phone"} value={phone} setValue={setPhone} />
						</View>
					</View>
				</View>
				<TouchableOpacity
					style={{
						width: "40%",
						paddingVertical: 20,
						borderRadius: 50,
						backgroundColor: "black",
						marginHorizontal: "auto",
					}}
				>
					<Text
						style={{
							fontWeight: "700",
							fontSize: 20,
							textAlign: "center",
							color: "white",
						}}
					>
						Save Change
					</Text>
				</TouchableOpacity>
			</SafeAreaView>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
		paddingHorizontal: 20,
	},
	profiePicBg: {
		width: 120,
		aspectRatio: 1 / 1,
		borderRadius: 100,
		backgroundColor: "red",
		overflow: "hidden",
	},
	inputPic: {
		width: 50,
		aspectRatio: 1 / 1,
		borderRadius: "50%",
		backgroundColor: "black",
		position: "absolute",
		bottom: -10,
		right: -10,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default EditProfie;
