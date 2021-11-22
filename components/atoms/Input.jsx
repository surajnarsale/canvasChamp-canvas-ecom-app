import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { COLORS } from "../../constants";

const InputContainer = ({ icon }) => {
	return (
		<View style={styles.container}>
			{icon}
			<TextInput
				placeholder="Search canvas..."
				style={styles.input}
			></TextInput>
		</View>
	);
};

export default InputContainer;

const styles = StyleSheet.create({
	container: {
		height: 48,
		width: "100%",
		backgroundColor: COLORS.white,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 15,
		paddingVertical: 14,
		borderRadius: 8,
	},
	input: {
		marginLeft: 19,
	},
});
