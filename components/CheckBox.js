import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import color from "../config/color";
import { useFonts } from "expo-font";

export default function CheckBox({ ingredient }) {
  const [checked, setChecked] = useState(false);

  const [loaded] = useFonts({
    FiraSans_Regular: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Regular.ttf"),
    FiraSans_Bold: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Bold.ttf"),
    FiraSans_Medium: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Checkbox.Item
      status={checked ? "checked" : "unchecked"}
      onPress={() => {
        setChecked(!checked);
      }}
      label={ingredient}
      position="leading"
      labelStyle={{ textAlign: "left", fontFamily: "FiraSans_Regular" }}
      color={color.primary_100}
    />
  );
}
