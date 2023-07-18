import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Text } from "@rneui/themed";
import { Button } from "react-native-paper";
import { deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { firebase } from "../firebaseConfig";
import color from "../config/color";
import size from "../config/size";

const RecipeList = () => {
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState();

  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeTime, setRecipeTime] = useState("");
  const [recipeLocation, setRecipeLocation] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeImageURL, setRecipeImageURL] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user.uid));
    return unsub;
  });

  const [users, setUsers] = useState([]);
  const todoRef = firebase
    .firestore()
    .collection("users")
    .doc(currentUser)
    .collection("recipes");

  useEffect(() => {
    todoRef.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const {
          recipeImage,
          recipeName,
          recipeDescription,
          recipeIngredients,
          recipeTime,
          recipeLocation,
        } = doc.data();
        users.push({
          recipeImage,
          recipeName,
          recipeDescription,
          recipeIngredients,
          recipeTime,
          recipeLocation,
        });
      });
      setUsers(users);
    });
  }, []);

  const deleteRecipe = (delRecipe) => {
    deleteDoc(doc(db, "users", currentUser, "recipes", delRecipe));
  };

  const [loaded] = useFonts({
    FiraSans_Regular: require("C:/Users/chris/assignment2-native/assets/fonts/FiraSans_Regular.ttf"),
    FiraSans_Bold: require("C:/Users/chris/assignment2-native/assets/fonts/FiraSans_Bold.ttf"),
    FiraSans_Medium: require("C:/Users/chris/assignment2-native/assets/fonts/FiraSans_Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={{ backgroundColor: color.bg_300 }}>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.recipeList}>Recipe List</Text>
          <FlatList
            style={{
              height: "100%",
              width: "100%",
            }}
            contentContainerStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            data={users}
            numColumns={1}
            renderItem={({ item }) => (
              <Pressable>
                <View
                  style={{
                    width: 350,
                    marginTop: 15,
                    padding: 10,
                    borderWidth: 2,
                    borderColor: color.primary_100,
                  }}
                >
                  <TouchableOpacity>
                    <Text style={styles.recipeTitle}>{item.recipeName}</Text>
                    <Text style={styles.recipeTitle2}>Description</Text>
                    <Text style={styles.recipeText}>
                      {item.recipeDescription}
                    </Text>
                    <Text style={styles.recipeTitle2}>Ingredients</Text>
                    <Text style={styles.recipeText}>
                      {item.recipeIngredients}
                    </Text>
                    <Text style={styles.recipeTitle2}>Time</Text>
                    <Text style={styles.recipeText}>{item.recipeTime}</Text>
                    <Text style={styles.recipeTitle2}>Origin</Text>
                    <Text style={styles.recipeText}>{item.recipeLocation}</Text>
                    <View
                      style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        alignItems: "flex-end",
                        width: "100%",
                      }}
                    >
                      <Button
                        style={styles.deleteButton}
                        labelStyle={{ color: color.bg_100 }}
                        onPress={() => {
                          deleteRecipe(item.recipeName);
                        }}
                      >
                        Delete
                      </Button>
                    </View>
                  </TouchableOpacity>
                </View>
              </Pressable>
            )}
          />
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "15%",
            }}
          >
            <Button
              style={styles.backButton}
              labelStyle={{ color: color.bg_100 }}
              onPress={() => navigation.replace("HomePage")}
            >
              Back
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  contentContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  recipeList: {
    fontFamily: "FiraSans_Bold",
    fontSize: size.large_1,
    marginLeft: 10,
  },
  recipeTitle: {
    fontFamily: "FiraSans_Bold",
    fontSize: size.medium_1,
    textDecorationLine: "underline",
    margin: 2,
  },
  recipeTitle2: {
    fontFamily: "FiraSans_Bold",
    fontSize: size.small_3,
    margin: 2,
  },
  recipeText: {
    fontFamily: "FiraSans_Regular",
    fontSize: size.small_3,
    margin: 2,
  },
  deleteButton: {
    width: "30%",
    backgroundColor: "red",
  },
  backButton: {
    width: "40%",
    backgroundColor: color.primary_100,
    marginTop: 8,
  },
});

export default RecipeList;
