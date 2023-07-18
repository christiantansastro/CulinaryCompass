import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import color from "../config/color";

export default function TextInput({ ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={color.primary_100}
        activeOutlineColor={color.primary_100}
        mode="outlined"
        {...props}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 12,
  },
  input: {
    backgroundColor: color.bg_100,
  },
  description: {
    fontSize: 13,
    color: color.primary_100,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: color.primary_200,
    paddingTop: 8,
  },
});
