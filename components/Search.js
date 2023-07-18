import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { SearchBar } from "@rneui/themed";
import color from "../config/color";
import size from "../config/size";

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <SearchBar
        lightTheme="True"
        round="True"
        inputContainerStyle={{
          backgroundColor: "white",
        }}
        inputStyle={{ fontFamily: "FiraSans_Medium" }}
        placeholder="Explore other recipes"
      />
      <View style={styles.gridContainer}>
        <TouchableOpacity style={styles.imageContainer}>
          <View style={styles.shadow}>
            <Image
              style={styles.Image}
              source={require("../images/muffins.jpg")}
            />
          </View>
          <Text style={styles.Title}>Healthy Blueberry Muffins</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <View style={styles.shadow}>
            <Image
              style={styles.Image}
              source={require("../images/salmon.jpg")}
            />
          </View>
          <Text style={styles.Title}>Japanese Salmon Bowl</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <View style={styles.shadow}>
            <Image
              style={styles.Image}
              source={require("../images/mashed_potatoes.jpg")}
            />
          </View>
          <Text style={styles.Title}>Classic Mashed Potatoes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <View style={styles.shadow}>
            <Image
              style={styles.Image}
              source={require("../images/pancakes.jpg")}
            />
          </View>
          <Text style={styles.Title}>Gluten-Free Pancakes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <View style={styles.shadow}>
            <Image
              style={styles.Image}
              source={require("../images/bahn_mi.jpg")}
            />
          </View>
          <Text style={styles.Title}>Bahn Mi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <View style={styles.shadow}>
            <Image
              style={styles.Image}
              source={require("../images/kungpao.jpg")}
            />
          </View>
          <Text style={styles.Title}>Kung Pao Chicken</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    height: "100%",
  },
  gridContainer: {
    width: "100%",
    height: "100%",
    marginTop: 15,
    backgroundColor: color.bg_100,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  imageContainer: {
    width: "40%",
    height: "26.2%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.bg_100,
    elevation: 10,
    borderRadius: 10,
    margin: 5,
  },
  shadow: {
    width: "100%",
    height: "70%",
  },
  Image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  Title: {
    fontSize: size.medium_1,
    alignSelf: "flex-start",
    fontFamily: "FiraSans_Regular",
    color: color.text_100,
    marginLeft: 12,
    marginBottom: 5,
  },
});

export default Search;
