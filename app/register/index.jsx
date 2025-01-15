import {
	View,
	Text,
	ScrollView,
	Platform,
	StatusBar,
	StyleSheet,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	Image,
	SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Alert from "../../components/Alert";

const index = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [alertIt, setAlertIt] = useState(false);
	const [responce, setResponce] = useState({});
	const testFeilds = () => {
		if (
			email.trim() === "" ||
			name.trim() === "" ||
			password.trim() === "" ||
			confirmPassword.trim() === ""
		) {
			setAlertIt(true);
			setResponce({ status: "error", message: "all inputs must be filled" });
			return false;
		} else if (password.trim() !== confirmPassword.trim()) {
			setAlertIt(true);
			setResponce({ status: "error", message: "Passwords does not match" });
			return false;
		} else {
			return true;
		}
	};
	const resetField = () => {
		setEmail("");
		setName("");
		setPassword("");
		setConfirmPassword("");
	};
	const register = async () => {
		setAlertIt(false);
		if (!testFeilds()) return;
		const userData = await AsyncStorage.getItem("userRecord");
		if (userData) {
			const data = JSON.parse(userData);
			const userExist = data.filter(
				(item) => item.email === email.toLocaleLowerCase().trim(),
			);
			if (userExist.length > 0) {
				setAlertIt(true);
				setResponce({ status: "error", message: "user existed" });
			} else {
				const newUser = {
					email: email.toLocaleLowerCase(),
					name,
					password,
					id: data.length + 1,
					history: [],
					billingDetails: [],
				};
				data.push(newUser);
				await AsyncStorage.setItem("userRecord", JSON.stringify(data));
				console.log(data);
				console.log(await AsyncStorage.getItem("userRecord"));
				setAlertIt(true);
				setResponce({
					status: "success",
					message: "User created, Continue at login",
				});
				resetField();
			}
		} else {
			const newData = [];
			const newUser = {
				email: email.toLocaleLowerCase(),
				name,
				password,
				id: 1,
				history: [],
				billingDetails: [],
			};
			newData.push(newUser);
			await AsyncStorage.setItem("userRecord", JSON.stringify(newData));
			setAlertIt(true);
			setResponce({
				status: "success",
				message: "User created, Continue at login",
			});
			resetField();
		}
	};
	return (
		<>
			<StatusBar backgroundColor='#ffffff' barStyle='dark-content' />
			<SafeAreaView style={[styles.container]}>
				{alertIt && (
					<Alert alertIt={alertIt} setalertIt={setAlertIt} message={responce} />
				)}
				<View
					style={{
						backgroundColor: "transparent",
						width: "85%",
						marginHorizontal: "auto",
					}}
				>
					<Text
						style={{
							fontWeight: "900",
							fontSize: 35,
							color: "black",
							marginBottom: 20,
							lineHeight: 60,
						}}
					>
						Create {"\n"} your account
					</Text>
					<KeyboardAvoidingView
						behavior='padding'
						style={{ width: "100%", marginTop: 20 }}
					>
						<View
							style={{
								borderBottomWidth: 1,
								borderBottomColor: "black",
								marginBottom: 20,
							}}
						>
							<TextInput
								style={styles.input}
								placeholder='Enter your name'
								keyboardType='name'
								autoCapitalize='words'
								autoComplete='name'
								value={name}
								onChangeText={(e) => setName(e)}
							/>
						</View>
						<View
							style={{
								borderBottomWidth: 1,
								borderBottomColor: "black",
								marginBottom: 20,
								fontSize: 30,
							}}
						>
							<TextInput
								style={styles.input}
								placeholder='Enter your email address'
								keyboardType='email-address'
								autoComplete='email'
								autoCapitalize='none'
								autoCorrect={true}
								autoFocus={false}
								autoSize={true}
								value={email}
								onChangeText={(e) => setEmail(e)}
							/>
						</View>
						<View
							style={{
								borderBottomWidth: 1,
								borderBottomColor: "black",
								marginBottom: 20,
								fontSize: 30,
							}}
						>
							<TextInput
								style={styles.input}
								placeholder='Enter your password'
								keyboardType='password'
								autoComplete='password-new'
								secureTextEntry={true}
								value={password}
								onChangeText={(e) => setPassword(e)}
							/>
						</View>
						<View
							style={{
								borderBottomWidth: 1,
								borderBottomColor: "black",
								marginBottom: 20,
								fontSize: 30,
							}}
						>
							<TextInput
								style={styles.input}
								placeholder='Confirm password'
								keyboardType='password'
								autoComplete='password-new'
								secureTextEntry={true}
								value={confirmPassword}
								onChangeText={(e) => setConfirmPassword(e)}
							/>
						</View>
						<View
							style={{
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<TouchableOpacity
								style={{
									backgroundColor: "#2D201C",
									paddingVertical: 20,
									borderRadius: 30,
									width: "100%",
									alignItems: "center",
									marginVertical: 30,
									width: 200,
									marginHorizontal: "auto",
								}}
								onPress={register}
							>
								<Text
									style={{
										color: "white",
										fontWeight: "bold",
										fontSize: 20,
									}}
								>
									SIGN UP
								</Text>
							</TouchableOpacity>
						</View>
					</KeyboardAvoidingView>
					<View
						style={{
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Text
							style={{
								color: "black",
								textAlign: "center",
								fontWeight: "light",
							}}
						>
							or sign up with
						</Text>
						<View
							style={{
								flexDirection: "row",
								gap: 30,
								marginTop: 25,
								lineHeight: 20,
								marginVertical: 25,
							}}
						>
							<TouchableOpacity>
								<Image
									source={require("../../assets/icon/google.png")}
									style={{ width: 45, height: 45 }}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									source={require("../../assets/icon/apple.png")}
									style={{ width: 45, height: 45 }}
								/>
							</TouchableOpacity>
							<TouchableOpacity>
								<Image
									source={require("../../assets/icon/facebook.png")}
									style={{ width: 45, height: 45 }}
								/>
							</TouchableOpacity>
						</View>
						<View style={{ marginTop: 25 }}>
							<Text style={{ color: "black", textAlign: "center" }}>
								Already have an account?{" "}
								<Link href='/login'>
									<Text style={{ color: "#2D201C", fontWeight: "bold" }}>
										Login
									</Text>
								</Link>
							</Text>
						</View>
					</View>
				</View>
			</SafeAreaView>
		</>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		// alignContent: 'center',
	},
	input: {
		fontSize: 25,
	},
});
export default index;
