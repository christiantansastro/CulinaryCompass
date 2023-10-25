import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppIntroSlider from "react-native-app-intro-slider";
import { useFonts } from "expo-font";
import color from "./config/color";
import size from "./config/size";

import StartScreen from "./screens/StartScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import HomePage from "./screens/HomePage";
import Settings from "./screens/Settings";
import RecipeList from "./screens/RecipeList";
import RecipeInfo from "./screens/RecipeInfo";
import MapScreen from "./screens/MapScreen";

const Stack = createStackNavigator();

const slides = [
  {
    id: 1,
    heading: "Choose your favourite cuisine",
    title1: "Japanese",
    title2: "Mexican",
    title3: "Chinese",
    title4: "Indonesian",
    title5: "Thai",
    title6: "Vietnamese",
    image1: require("./images/japanese.png"),
    image2: require("./images/mexican.png"),
    image3: require("./images/chinese.png"),
    image4: require("./images/indonesian.png"),
    image5: require("./images/thai.png"),
    image6: require("./images/vietnam.png"),
  },
  {
    id: 2,
    heading: "Choose your dietary preference",
    title1: "Vegetarian",
    title2: "Vegan",
    title3: "Pescetarian",
    title4: "Ketogenic",
    title5: "Carnivore",
    title6: "Any",
    image1: require("./images/vegetarian.png"),
    image2: require("./images/vegan.png"),
    image3: require("./images/pescetarian.png"),
    image4: require("./images/keto.png"),
    image5: require("./images/carnivore.png"),
    image6: require("./images/any.png"),
  },
  {
    id: 3,
    heading: "Do you have any allergies?",
    title1: "Eggs",
    title2: "Dairy",
    title3: "Soy",
    title4: "Seafood",
    title5: "Nuts",
    title6: "No allergies",
    image1: require("./images/eggs.png"),
    image2: require("./images/dairy.png"),
    image3: require("./images/soy.png"),
    image4: require("./images/seafood.png"),
    image5: require("./images/nuts.png"),
    image6: require("./images/no.png"),
  },
];

export default function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  const [loaded] = useFonts({
    FiraSans_Regular: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Regular.ttf"),
    FiraSans_Bold: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Bold.ttf"),
    FiraSans_Medium: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const buttonLabel = (label) => {
    return (
      <View
        style={{
          padding: 12,
        }}
      >
        <Text
          style={{
            color: color.bg_100,
            fontWeight: "600",
            fontSize: size.medium_1,
            fontFamily: "FiraSans_Medium",
            borderRadius: 30,
            backgroundColor: color.accent_200,
            width: 80,
            height: 30,
            textAlign: "center",
          }}
        >
          {label}
        </Text>
      </View>
    );
  };

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        ref={(ref) => (this.slider = ref)}
        renderItem={({ item }) => {
          return (
            <SafeAreaView style={{ backgroundColor: color.bg_300 }}>
              <View style={styles.container}>
                <Text style={styles.heading}>{item.heading}</Text>
              </View>

              <View style={styles.gridContainer}>
                {item.id < 3 ? (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => this.slider.goToSlide(item.id, true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image1} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title1}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => setShowHomePage(true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image1} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title1}</Text>
                  </TouchableOpacity>
                )}

                {item.id < 3 ? (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => this.slider.goToSlide(item.id, true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image2} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title2}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => setShowHomePage(true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image2} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title2}</Text>
                  </TouchableOpacity>
                )}

                {item.id < 3 ? (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => this.slider.goToSlide(item.id, true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image3} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title3}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => setShowHomePage(true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image3} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title3}</Text>
                  </TouchableOpacity>
                )}

                {item.id < 3 ? (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => this.slider.goToSlide(item.id, true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image4} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title4}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => setShowHomePage(true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image4} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title4}</Text>
                  </TouchableOpacity>
                )}

                {item.id < 3 ? (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => this.slider.goToSlide(item.id, true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image5} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title5}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => setShowHomePage(true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image5} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title5}</Text>
                  </TouchableOpacity>
                )}

                {item.id < 3 ? (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => this.slider.goToSlide(item.id, true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image6} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title6}</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.imageContainer}
                    onPress={() => setShowHomePage(true)}
                  >
                    <View style={styles.shadow}>
                      <Image source={item.image6} style={styles.Image} />
                    </View>
                    <Text style={styles.Title}>{item.title6}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </SafeAreaView>
          );
        }}
        activeDotStyle={{
          backgroundColor: color.primary_100,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="StartScreen"
          component={StartScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="HomePage"
          component={HomePage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Settings"
          component={Settings}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RecipeList"
          component={RecipeList}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="RecipeInfo"
          component={RecipeInfo}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="MapScreen"
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "12%",
    backgroundColor: color.bg_100,
    alignItems: "center",
  },
  heading: {
    width: "100%",
    height: "50%",
    fontSize: size.medium_3,
    fontFamily: "FiraSans_Bold",
    left: 15,
    top: 20,
    color: color.text_100,
  },
  gridContainer: {
    width: "100%",
    height: "88%",
    backgroundColor: color.bg_100,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 30,
  },
  imageContainer: {
    width: "45%",
    height: "28.2%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.bg_100,
    elevation: 10,
    borderRadius: 10,
    margin: 5,
  },
  shadow: {
    width: "75%",
    height: "75%",
    borderRadius: 10,
  },
  Image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  Title: {
    fontSize: size.medium_3,
    fontFamily: "FiraSans_Bold",
    color: color.text_100,
  },
});
