import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import color from "../config/color";

export default function Header(props) {
  return <Text style={styles.header} {...props} />;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    color: color.primary_100,
    fontWeight: "bold",
    paddingVertical: 12,
  },
});
