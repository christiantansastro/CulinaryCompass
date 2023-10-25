import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import YoutubePlayer from "react-native-youtube-iframe";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2 from "react-native-vector-icons/Ionicons";
import color from "../config/color";
import size from "../config/size";
import CheckBox from "../components/CheckBox";
import { Divider } from "@rneui/themed";

const RecipeInfo = ({ route, navigation }) => {
  const {
    recipeName,
    recipeDescription,
    recipeIngredients,
    recipeTime,
    recipeOrigin,
    recipeVideo,
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
  } = route.params;

  var ingredientsArray = recipeIngredients.split(",");

  const [loaded] = useFonts({
    FiraSans_Regular: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Regular.ttf"),
    FiraSans_Bold: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Bold.ttf"),
    FiraSans_Medium: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: color.bg_100 }}>
      <SafeAreaView style={{ backgroundColor: color.bg_300 }}>
        <View style={{ backgroundColor: color.bg_100 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomePage")}
            style={{ padding: 5, width: "10%" }}
          >
            <Icon2 name="arrow-back" size={30} />
          </TouchableOpacity>
        </View>
        <View style={styles.videoContainer}>
          <YoutubePlayer height={225} play={false} videoId={recipeVideo} />
        </View>
      </SafeAreaView>
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.recipeName}>{recipeName}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", marginTop: 5, marginBottom: 5 }}>
            <Icon name="timer-outline" size={20} />
            <Text style={styles.recipeContent}>{recipeTime}</Text>
          </View>
          <TouchableOpacity
            style={{ flexDirection: "row", marginTop: 5, marginLeft: 10 }}
            onPress={() =>
              navigation.navigate("MapScreen", {
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta,
              })
            }
          >
            <Icon2 name="location-outline" size={20} />
            <Text style={styles.recipeContent}>{recipeOrigin}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.recipeContent2}>{recipeDescription}</Text>
        <Divider width={2} style={{ marginTop: 10, marginBottom: 5 }} />
        <Text style={styles.ingredients}>Ingredients:</Text>
        {ingredientsArray.map((check) => {
          return (
            <View>
              <CheckBox ingredient={check} />
            </View>
          );
        })}
        <Text>{"\n"}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    borderWidth: 3,
    borderColor: color.primary_100,
  },
  contentContainer: {
    height: "100%",
    padding: 10,
  },
  recipeName: {
    fontFamily: "FiraSans_Bold",
    fontSize: size.medium_3,
    color: color.primary_200,
  },
  recipeContent: {
    fontFamily: "FiraSans_Regular",
    fontSize: size.medium_1,
    marginLeft: 5,
  },
  recipeContent2: {
    fontFamily: "FiraSans_Regular",
    fontSize: size.medium_1,
    textAlign: "justify",
  },
  ingredients: {
    fontFamily: "FiraSans_Bold",
    fontSize: size.medium_2,
    color: color.primary_200,
  },
});

export default RecipeInfo;
