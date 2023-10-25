import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { Text } from "@rneui/themed";
import { TextInput, Button } from "react-native-paper";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import * as ImagePicker from "expo-image-picker";
import { firebase } from "../firebaseConfig";
import color from "../config/color";
import size from "../config/size";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const AddRecipe = () => {
  const [currentUser, setCurrentUser] = useState();

  const [recipeName, setRecipeName] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState("");
  const [recipeTime, setRecipeTime] = useState("");
  const [recipeLocation, setRecipeLocation] = useState("");
  const [recipeImage, setRecipeImage] = useState("");
  const [recipeImageURL, setRecipeImageURL] = useState();

  const [addButton, setAddButton] = useState("Submit");

  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user.uid));
    return unsub;
  });

  useEffect(() => {
    const fetch = async () => {
      const storage = getStorage();
      const reference = ref(storage, currentUser + "/" + recipeImage);
      await getDownloadURL(reference).then((x) => {
        setRecipeImageURL(x);
      });
    };

    fetch();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "users", currentUser, "recipes", recipeName), {
      recipeImage: recipeImage,
      recipeName: recipeName,
      recipeDescription: recipeDescription,
      recipeIngredients: recipeIngredients,
      recipeTime: recipeTime,
      recipeLocation: recipeLocation,
      timeStamp: serverTimestamp(),
    });
    if (addButton == "Submit") {
      this.alert("Recipe Submitted");
    } else {
      this.alert("Recipe Updated");
    }
    setAddButton("Update");
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    const source = { uri: result.uri };
    setRecipeImage(source);
  };

  const uploadImage = async () => {
    setUploading(true);
    const response = await fetch(recipeImage.uri);
    const blob = await response.blob();
    const filename = recipeImage.uri.substring(
      recipeImage.uri.lastIndexOf("/") + 1
    );
    var ref = firebase
      .storage()
      .ref(currentUser + "/")
      .child(filename)
      .put(blob);
    setRecipeImage(filename);

    try {
      await ref;
    } catch (e) {
      console.log(e);
    }
    setUploading(false);
    setImage(null);
  };

  const [loaded] = useFonts({
    FiraSans_Regular: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Regular.ttf"),
    FiraSans_Bold: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Bold.ttf"),
    FiraSans_Medium: require("C:/Users/chris/final-project/assets/fonts/FiraSans_Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.addContainer}>
      <Text style={styles.addTitle}>Add a Recipe</Text>
      <TouchableOpacity
        onPress={pickImage}
        style={{ borderWidth: 2, borderColor: color.primary_100 }}
      >
        <Image
          style={{
            width: 150,
            height: 150,
            resizeMode: "cover",
          }}
          source={{ uri: recipeImageURL }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={uploadImage}>
        <Text style={styles.addImage}>Confirm</Text>
      </TouchableOpacity>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextInput
          label="Name"
          mode="outlined"
          selectionColor={color.primary_100}
          activeOutlineColor={color.primary_100}
          textColor="black"
          style={styles.addInput}
          onChangeText={(text) => setRecipeName(text)}
        />
        <TextInput
          label="Description"
          mode="outlined"
          selectionColor={color.primary_100}
          activeOutlineColor={color.primary_100}
          textColor="black"
          style={styles.addInput}
          onChangeText={(text) => setRecipeDescription(text)}
        />
        <TextInput
          label="Ingredients"
          multiline={true}
          mode="outlined"
          selectionColor={color.primary_100}
          activeOutlineColor={color.primary_100}
          textColor="black"
          style={styles.addInput}
          onChangeText={(text) => setRecipeIngredients(text)}
        />
        <TextInput
          label="Time"
          mode="outlined"
          selectionColor={color.primary_100}
          activeOutlineColor={color.primary_100}
          textColor="black"
          style={styles.addInput}
          onChangeText={(text) => setRecipeTime(text)}
        />
        <TextInput
          label="Origin"
          mode="outlined"
          selectionColor={color.primary_100}
          activeOutlineColor={color.primary_100}
          textColor="black"
          style={styles.addInput}
          onChangeText={(text) => setRecipeLocation(text)}
        />
      </View>
      <Button
        style={styles.addButton}
        labelStyle={{ color: color.bg_100 }}
        onPress={handleAdd}
      >
        {addButton}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addTitle: {
    fontFamily: "FiraSans_Bold",
    fontSize: size.medium_3,
    color: color.primary_100,
    textDecorationLine: "underline",
    marginBottom: 10,
  },
  addImage: {
    fontFamily: "FiraSans_Bold",
    fontSize: size.medium_1,
    marginTop: 3,
  },
  addInput: {
    width: "80%",
    margin: 5,
  },
  addButton: {
    width: "30%",
    marginTop: 10,
    backgroundColor: color.primary_100,
  },
});

export default AddRecipe;
