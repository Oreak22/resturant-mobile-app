import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../redux/golbalReducer";

const _layout = () => {
	const store = configureStore({ reducer: { globalReducer } });
	return (
		<Provider store={store}>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='index'
					options={{
						headerShown: false,
						animation: "slide_from_right",
						headerLeft: () => <Text>Back</Text>,
						headerLeftContainerStyle: { paddingLeft: 10 },
						headerLeftLabelStyle: { fontFamily: "Product Sans Regular" },
					}}
				/>
				<Stack.Screen
					name='home/index'
					options={{
						headerShown: false,
						animation: "flip",
						presentation: "modal",
						headerLeft: () => <Text>Back</Text>,
						headerLeftContainerStyle: { paddingLeft: 10 },
						headerLeftLabelStyle: { fontFamily: "Product Sans Regular" },
						headerRight: () => <Text>Next</Text>,
						headerRightContainerStyle: { paddingRight: 10 },
						headerRightLabelStyle: { fontFamily: "Product Sans Regular" },
					}}
				/>
				<Stack.Screen
					name='login/index'
					options={{
						headerShown: false,
						animation: "flip",
						presentation: "modal",
						headerLeft: () => <Text>Back</Text>,
						headerLeftContainerStyle: { paddingLeft: 10 },
						headerLeftLabelStyle: { fontFamily: "Product Sans Regular" },
						headerRight: () => <Text>Next</Text>,
						headerRightContainerStyle: { paddingRight: 10 },
						headerRightLabelStyle: { fontFamily: "Product Sans Regular" },
					}}
				/>
				<Stack.Screen
					name='register/index'
					options={{
						headerShown: false,
						animation: "flip",
						presentation: "modal",
						headerLeft: () => <Text>Back</Text>,
						headerLeftContainerStyle: { paddingLeft: 10 },
						headerLeftLabelStyle: { fontFamily: "Product Sans Regular" },
						headerRight: () => <Text>Next</Text>,
						headerRightContainerStyle: { paddingRight: 10 },
						headerRightLabelStyle: { fontFamily: "Product Sans Regular" },
					}}
				/>
				<Stack.Screen
					name='product/[id]'
					options={{
						headerShown: false,
						animation: "flip",
						presentation: "modal",
						headerLeft: () => <Text>Back</Text>,
						headerLeftContainerStyle: { paddingLeft: 10 },
						headerLeftLabelStyle: { fontFamily: "Product Sans Regular" },
						headerRight: () => <Text>Next</Text>,
						headerRightContainerStyle: { paddingRight: 10 },
						headerRightLabelStyle: { fontFamily: "Product Sans Regular" },
					}}
				/>
				<Stack.Screen
					name='search/index'
					options={{
						headerShown: false,
						animation: "flip",
						presentation: "modal",
						headerLeft: () => <Text>Back</Text>,
						headerLeftContainerStyle: { paddingLeft: 10 },
						headerLeftLabelStyle: { fontFamily: "Product Sans Regular" },
						headerRight: () => <Text>Next</Text>,
						headerRightContainerStyle: { paddingRight: 10 },
						headerRightLabelStyle: { fontFamily: "Product Sans Regular" },
					}}
				/>
				<Stack.Screen
					name='search/searchResult/[search]'
					options={{
						headerShown: false,
						animation: "flip",
						presentation: "modal",
						headerLeft: () => <Text>Back</Text>,
						headerLeftContainerStyle: { paddingLeft: 10 },
						headerLeftLabelStyle: { fontFamily: "Product Sans Regular" },
						headerRight: () => <Text>Next</Text>,
						headerRightContainerStyle: { paddingRight: 10 },
						headerRightLabelStyle: { fontFamily: "Product Sans Regular" },
					}}
				/>
				<Stack.Screen
					name='order/index'
					options={{
						headerShown: false,
						animation: "flip",
						presentation: "modal",
						headerLeft: () => <Text>Back</Text>,
						headerLeftContainerStyle: { paddingLeft: 10 },
						headerLeftLabelStyle: { fontFamily: "Product Sans Regular" },
						headerRight: () => <Text>Next</Text>,
						headerRightContainerStyle: { paddingRight: 10 },
						headerRightLabelStyle: { fontFamily: "Product Sans Regular" },
					}}
				/>
				<Stack.Screen
					name='order/[status]'
					options={{
						headerShown: false,
						animation: "flip",
						presentation: "modal",
						headerLeft: () => <Text>Back</Text>,
						headerLeftContainerStyle: { paddingLeft: 10 },
						headerLeftLabelStyle: { fontFamily: "Product Sans Regular" },
						headerRight: () => <Text>Next</Text>,
						headerRightContainerStyle: { paddingRight: 10 },
						headerRightLabelStyle: { fontFamily: "Product Sans Regular" },
					}}
				/>
			</Stack>
		</Provider>
	);
};

export default _layout;
