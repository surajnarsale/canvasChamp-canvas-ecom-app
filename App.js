import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Header, InputContainer, Search } from "./components/";
import { COLORS } from "./constants";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar backgroundColor={COLORS.primary} style="auto" />
			<Header />
			<Text style={styles.title}>Find the best Canvas for you</Text>
			<InputContainer icon={<Search />} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 62,
		paddingHorizontal: 24,
		backgroundColor: COLORS.primary,
	},
	title: {
		fontSize: 27,
		fontWeight: "bold",
		marginTop: 62,
		width: "70%",
		marginBottom: 34,
	},
});
