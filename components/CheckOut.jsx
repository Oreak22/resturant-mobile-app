import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	Modal,
	Dimensions,
	KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome, FontAwesome6 } from "@expo/vector-icons";
import Input from "./Input";
import Radio from "./Radio";
import { router } from "expo-router";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { editCart } from "../redux/golbalReducer";

const CheckOut = ({ setCheckout }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [country, setCountry] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [streetName, setStreetName] = useState("");
	const [city, setCity] = useState("");
	const [state, setState] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [copyAdress, setCopyAdress] = useState(false);
	const [checkedOut, setCheckedOut] = useState(false);
	const userId = useSelector((state) => state.globalReducer.userId);
	const cart = useSelector((state) => state.globalReducer.cart);
	const dispatch = useDispatch();
	const [done, setDone] = useState(false);

	const trackingNumber = () =>
		`${"GM" + Math.floor(1000000 * Math.random() * 9000000)}`;
	const generateId = () => `${Math.floor(1000 * Math.random() * 9000)}`;
	const check = () => generateId() % 2 === 0;
	const PayBills = async () => {
		const data = await AsyncStorage.getItem("userRecord");
		// const userRecords
		const userRecords = await JSON.parse(data);
		const thisUserRecord = userRecords.filter((record) => record.id !== userId);
		const notThisUser = userRecords.filter((record) => record.id === userId);
		const history = thisUserRecord[0].history
			? [
					...thisUserRecord[0].history,
					{
						trackingNumber: trackingNumber(),
						order: cart,
						id: generateId(),
						status: check ? "PENDING" : "DELIVERED",
						time: new Date(),
					},
			  ]
			: [
					{
						trackingNumber: trackingNumber(),
						order: cart,
						id: generateId(),
						status: check ? "PENDING" : "DELIVERED",
						time: new Date(),
					},
			  ];
		const updateThisUser = { ...thisUserRecord[0], history };
		await AsyncStorage.setItem(
			"userRecord",
			JSON.stringify([...notThisUser, updateThisUser]),
		);
		dispatch(editCart([]));
	};
	const deliveryMethod = [
		{
			label: "D1",
			to: "Delivery to home",
			price: "free",
			duration: "Delivery from 5 to 10 business days",
		},
		{
			label: "D2",
			to: "Delivery to home",
			price: "9.90",
			duration: "Delivery from 4 to 6 business days",
		},
		{
			label: "D3",
			to: "Delivery to home",
			price: "9.90",
			duration: "Delivery from 2 to 3 business days",
		},
	];
	const [DeliveryMethod, setDeliveryMethod] = useState("");

	return (
		<>
			<View style={[styles.container, { justifyContent: "center" }]}>
				<TouchableOpacity
					onPress={() => setCheckout(false)}
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
						fontSize: 25,
						fontWeight: "800",
					}}
				>
					Check Out
				</Text>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<ScrollView
					style={{ paddingBottom: 100 }}
					showsVerticalScrollIndicator={false}
				>
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							width: "80%",
							marginHorizontal: "auto",
							paddingVertical: 20,
						}}
					>
						<FontAwesome name='location-arrow' size={20} color={"black"} />
						<Text style={{ letterSpacing: 7 }}>. . . . . </Text>
						<FontAwesome name='id-card' size={20} color={"rgba(0,0,0,0.4)"} />
						<Text style={{ letterSpacing: 7 }}>. . . . . </Text>
						<FontAwesome name='check' size={20} color={"rgba(0,0,0,0.4)"} />
					</View>
					<View style={{ paddingVertical: 10 }}>
						<Text style={{ fontSize: 15, color: "rgba(0,0,0,0.5)" }}>
							STEP 1
						</Text>
						<Text style={{ fontSize: 25, color: "black", fontWeight: "900" }}>
							Shipping
						</Text>
					</View>
					<KeyboardAvoidingView
						behavior='padding'
						style={{ paddingVertical: 25 }}
					>
						<Input
							placeholder={"First Name"}
							value={firstName}
							setValue={setFirstName}
						/>
						<Input
							placeholder={"Last Name"}
							value={lastName}
							setValue={setLastName}
						/>
						<Input
							placeholder={"Country"}
							value={country}
							setValue={setCountry}
						/>
						<Input
							placeholder={"Street Name"}
							value={streetName}
							setValue={setStreetName}
						/>
						<Input placeholder={"City"} value={city} setValue={setCity} />
						<Input placeholder={"State"} value={state} setValue={setState} />
						<Input
							placeholder={"Zip Code"}
							value={zipCode}
							setValue={setZipCode}
						/>
						<Input
							placeholder={"Phone Number"}
							value={phoneNumber}
							setValue={setPhoneNumber}
						/>
					</KeyboardAvoidingView>
					<View style={{ paddingBottom: 100 }}>
						<View style={{ paddingVertical: 20 }}>
							<Text style={{ fontSize: 25, color: "black", fontWeight: "900" }}>
								Shipping method
							</Text>
							<View
								style={{
									paddingVertical: 20,
									width: "90%",
									marginHorizontal: "auto",
								}}
							>
								{deliveryMethod.map((d, i) => (
									<Radio
										key={d.label}
										how={DeliveryMethod}
										setHow={setDeliveryMethod}
										details={d}
										index={i}
									/>
								))}
							</View>
						</View>
						<View style={{ paddingVertical: 20 }}>
							<Text style={{ fontSize: 25, color: "black", fontWeight: "900" }}>
								Billing Address
							</Text>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									paddingVertical: 20,
								}}
							>
								<TouchableOpacity
									onPress={() => setCopyAdress(!copyAdress)}
									style={[
										styles.shadow,
										{
											width: 25,
											height: 25,
											borderRadius: 4,
											backgroundColor: copyAdress ? "blue" : "white",
											justifyContent: "center",
											alignItems: "center",
										},
									]}
								>
									{copyAdress && (
										<FontAwesome name='check' size={17} color={"white"} />
									)}
								</TouchableOpacity>
								<Text style={{ fontSize: 18, marginLeft: 5 }}>
									{" "}
									Copy address data from shipping
								</Text>
							</View>
							<TouchableOpacity
								onPress={() => {
									PayBills();
									setCheckedOut(true);
								}}
								style={{
									marginVertical: 35,
									width: "100%",
									borderRadius: 40,
									backgroundColor: "black",
									paddingVertical: 20,
								}}
							>
								<Text
									style={{
										color: "white",
										fontWeight: "600",
										fontSize: 20,
										textAlign: "center",
									}}
								>
									Countinue Payment
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</View>
			<Modal
				transparent={false}
				visible={checkedOut}
				onRequestClose={() => () => {
					setCheckedOut(false);
					setCheckout(false);
					router.replace("/home");
				}}
			>
				<View
					style={{
						backgroundColor: "white",
						height: Dimensions.get("window").height,
					}}
				>
					<View style={[styles.container, { justifyContent: "center" }]}>
						<TouchableOpacity
							onPress={() => {
								setCheckedOut(false);
								setCheckout(false);
								router.replace("/home");
							}}
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
								fontSize: 25,
								fontWeight: "800",
							}}
						>
							Check Out
						</Text>
					</View>
					<View
						style={{
							flex: 1,
							paddingHorizontal: 10,
							justifyContent: "space-evenly",
						}}
					>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								width: "80%",
								marginHorizontal: "auto",
								paddingVertical: 20,
							}}
						>
							<FontAwesome name='location-arrow' size={20} color={"black"} />
							<Text style={{ letterSpacing: 7 }}>. . . . . </Text>
							<FontAwesome name='id-card' size={20} color={"black"} />
							<Text style={{ letterSpacing: 7 }}>. . . . . </Text>
							<FontAwesome name='check' size={20} color={"black"} />
						</View>
						<View
							style={{
								justifyContent: "center",
								alignItems: "center",
								flexDirection: "column",
							}}
						>
							<Text
								style={{ fontWeight: "900", fontSize: 30, textAlign: "center" }}
							>
								Order Completed
							</Text>
						</View>
						<FontAwesome
							name='shopping-bag'
							size={80}
							style={{
								marginHorizontal: "auto",
								marginVertical: 25,
								justifyContent: "center",
								alignItems: "center",
								textAlign: "center",
							}}
						/>
						<Text style={{ textAlign: "center", fontSize: 20 }}>
							Thank you for your purchase.{"\n"}You can view your order in ‘My
							Orders’ section.
						</Text>
						<TouchableOpacity
							onPress={() => {
								setCheckedOut(false);
								setCheckout(false);
								router.replace("/home");
							}}
							style={{
								marginVertical: 35,
								width: "100%",
								borderRadius: 40,
								backgroundColor: "black",
								paddingVertical: 20,
							}}
						>
							<Text
								style={{
									color: "white",
									fontWeight: "600",
									fontSize: 20,
									textAlign: "center",
								}}
							>
								Countinue Shopping
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(0,0,0,0)",
		flexDirection: "row",
		// paddingHorizontal: 20,
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
	shadow: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.1,
		shadowRadius: 2,
		elevation: 1,
		borderWidth: 0.5,
	},
});

export default CheckOut;
