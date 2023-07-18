import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { Avatar, Divider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/core";

import color from "../config/color";
import size from "../config/size";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Avatar
        size={128}
        rounded
        icon={{ name: "adb", type: "material" }}
        containerStyle={{
          backgroundColor: color.accent_100,
          alignSelf: "center",
          marginTop: 15,
        }}
      ></Avatar>
      <Text style={styles.username}>username</Text>
      <Divider width={2} />
      <TouchableOpacity onPress={() => navigation.replace("Settings")}>
        <Button
          style={styles.profile}
          labelStyle={{
            color: color.text_100,
            fontFamily: "FiraSans_Medium",
            fontSize: size.medium_2,
          }}
        >
          Settings
        </Button>
      </TouchableOpacity>
      <Divider width={2} />
      <TouchableOpacity onPress={() => navigation.replace("RecipeList")}>
        <Button
          style={styles.profile}
          labelStyle={{
            color: color.text_100,
            fontFamily: "FiraSans_Medium",
            fontSize: size.medium_2,
          }}
        >
          Your Recipes
        </Button>
      </TouchableOpacity>
      <Divider width={2} />
      <TouchableOpacity>
        <Button
          style={styles.profile}
          labelStyle={{
            color: color.text_100,
            fontFamily: "FiraSans_Medium",
            fontSize: size.medium_2,
          }}
        >
          Dietary Preferences
        </Button>
      </TouchableOpacity>
      <Divider width={2} />
    </View>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: size.large_1,
    textAlign: "center",
    marginBottom: 15,
    fontFamily: "FiraSans_Bold",
  },
  profile: {
    marginVertical: 8,
  },
});

export default Profile;
