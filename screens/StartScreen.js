import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

const StartScreen = ({ navigation }) => {
  return (
    <Background>
      <Logo />
      <Header>Start your journey</Header>
      <Paragraph>Waste less, taste more!</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate("Login")}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate("Register")}>
        Sign Up
      </Button>
    </Background>
  );
};

export default StartScreen;
