import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ShoppingBag } from "../components/icons";
import { images, COLORS } from "../constants/";

export default function Header() {
	return (
		<View style={styles.container}>
			<Image style={styles.porfile} source={images.profile} />
			<Text style={styles.logo}>CanvasChamp</Text>
			<ShoppingBag />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
	},
	logo: {
		fontWeight: "bold",
		fontSize: 16,
	},
	title: {
		fontSize: 16,
		color: "#b8bece",
	},
	icon: {},
	porfile: {
		width: 40,
		height: 40,
		borderRadius: 50,
	},
});
