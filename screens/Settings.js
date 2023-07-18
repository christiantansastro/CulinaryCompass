import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth, db } from "../firebaseConfig";
import { Button, TextInput } from "react-native-paper";
import { onAuthStateChanged } from "firebase/auth";
import { firebase } from "../firebaseConfig";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import color from "../config/color";
import size from "../config/size";

export default function Settings() {
  const navigation = useNavigation();

  const [currentUser, setCurrentUser] = useState();

  const [username, setUsername] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));

    return unsub;
  });

  const [users, setUsers] = useState([]);
  const todoRef = firebase.firestore().collection("users");

  useEffect(() => {
    todoRef.onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.forEach((doc) => {
        const { username, phoneNo, country } = doc.data();
        users.push({
          username,
          phoneNo,
          country,
        });
      });
      setUsers(users);
    });
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("StartScreen");
      })
      .catch((error) => alert(error.message));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "users", currentUser.uid), {
      username: username,
      phoneNo: phoneNo,
      country: country,
      timeStamp: serverTimestamp(),
    });
  };

  return (
    <View style={styles.settingsContainer}>
      <Image
        style={{
          marginTop: 35,
          height: 150,
          width: 150,
          resizeMode: "contain",
        }}
        source={require("../images/logo_CC.png")}
      />
      <Text style={styles.profileTitle}>Profile Information</Text>
      <FlatList
        style={{
          height: "75%",
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
            <View>
              <Text style={styles.addTitle}>Name</Text>
              <TextInput
                mode="outlined"
                selectionColor={color.primary_100}
                activeOutlineColor={color.primary_100}
                textColor="black"
                style={styles.addInput}
                placeholder={item.username}
                onChangeText={(text) => setUsername(text)}
              />
              <Text style={styles.addTitle}>Phone Number</Text>
              <TextInput
                mode="outlined"
                selectionColor={color.primary_100}
                activeOutlineColor={color.primary_100}
                textColor="black"
                style={styles.addInput}
                placeholder={item.phoneNo}
                onChangeText={(text) => setPhoneNo(text)}
              />
              <Text style={styles.addTitle}>Country</Text>
              <TextInput
                mode="outlined"
                selectionColor={color.primary_100}
                activeOutlineColor={color.primary_100}
                textColor="black"
                style={styles.addInput}
                placeholder={item.country}
                onChangeText={(text) => setCountry(text)}
              />
            </View>
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "30%",
                width: "100%",
                marginTop: 30,
              }}
            >
              <Button
                style={styles.addButton}
                labelStyle={{ color: color.bg_100 }}
                onPress={handleAdd}
              >
                Submit
              </Button>
              <Button
                style={styles.addButton}
                labelStyle={{ color: color.bg_100 }}
                onPress={() => navigation.replace("HomePage")}
              >
                Back
              </Button>
              <Button
                style={styles.signOutButton}
                labelStyle={{ color: color.primary_100 }}
                onPress={handleSignOut}
              >
                Logout
              </Button>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  settingsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: color.bg_100,
  },
  profileTitle: {
    fontFamily: "FiraSans_Bold",
    fontSize: size.large_1,
    textDecorationLine: "underline",
    margin: 2,
  },
  addTitle: {
    fontFamily: "FiraSans_Bold",
    fontSize: size.medium_1,
    marginTop: 5,
  },
  addInput: {
    width: 300,
  },
  addButton: {
    width: "50%",
    backgroundColor: color.primary_100,
    marginBottom: 15,
  },
  signOutButton: {
    width: "40%",
    borderWidth: 1,
    borderColor: color.primary_100,
    backgroundColor: color.bg_100,
  },
});
