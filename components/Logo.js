import React from "react";
import { Image, StyleSheet } from "react-native";

export default function Logo() {
  return (
    <Image source={require("../images/logo_CC.png")} style={styles.image} />
  );
}

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: "35%",
    marginBottom: 8,
  },
});
