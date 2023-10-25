import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Tab, TabView } from "@rneui/themed";
import React from "react";
import color from "../config/color";

import Home from "../components/Home";
import Search from "../components/Search";
import ImageCapture from "../components/ImageCapture";
import Profile from "../components/Profile";
import AddRecipe from "../components/AddRecipe";

function HomePage() {
  const [index, setIndex] = React.useState(0);

  const [loaded] = useFonts({
    FiraSans_Regular: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Regular.ttf"),
    FiraSans_Bold: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Bold.ttf"),
    FiraSans_Medium: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ backgroundColor: color.bg_300 }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <TabView value={index} onChange={setIndex} disableTransition="True">
            {/*Home */}
            <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
              <Home />
            </TabView.Item>

            {/*Search */}
            <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
              <Search />
            </TabView.Item>

            {/*Camera */}
            <TabView.Item style={{ flex: 1 }}>
              <ImageCapture />
            </TabView.Item>

            {/*Upload recipe */}
            <TabView.Item style={{ width: "100%", backgroundColor: "white" }}>
              <AddRecipe />
            </TabView.Item>

            {/*Profile */}
            <TabView.Item style={{ backgroundColor: "white", width: "100%" }}>
              <Profile />
            </TabView.Item>
          </TabView>
        </View>

        <View style={styles.navContainer}>
          <Tab
            value={index}
            containerStyle={{ backgroundColor: color.primary_100 }}
            onChange={(e) => setIndex(e)}
            indicatorStyle={{
              backgroundColor: "white",
              height: 3,
            }}
            variant="primary"
          >
            <Tab.Item
              icon={{
                name: "home",
                type: "ionicon",
                color: "white",
              }}
            />
            <Tab.Item
              icon={{
                name: "search",
                type: "ionicon",
                color: "white",
              }}
            />
            <Tab.Item
              icon={{
                name: "camera",
                type: "ionicon",
                color: "white",
              }}
            />
            <Tab.Item
              icon={{
                name: "add",
                type: "ionicon",
                color: "white",
              }}
            />
            <Tab.Item
              icon={{
                name: "person",
                type: "ionicon",
                color: "white",
              }}
            />
          </Tab>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  navContainer: {
    width: "100%",
    height: "6%",
  },
  contentContainer: {
    width: "100%",
    height: "94%",
  },
});

export default HomePage;
