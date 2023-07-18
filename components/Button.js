import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import color from "../config/color";

export default function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === "contained" && {
          backgroundColor: color.primary_100,
        },
        mode === "outlined" && {
          backgroundColor: color.bg_100,
        },
      ]}
      labelStyle={[
        styles.text,
        mode === "contained" && {
          color: color.bg_100,
        },
        mode === "outlined" && {
          color: color.primary_100,
        },
        mode,
      ]}
      mode={mode}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});
