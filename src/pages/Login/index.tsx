import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import firebase from "react-native-firebase";

import { KeyboardView, Title, Container, Input } from "./styles";
import { useState } from "react";

function Login() {
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNavigateToHomeTabs() {
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     navigate("HomeTabs");
    //   })
    //   .catch(() => {
    //     console.error();
    //   });
    navigate("HomeTabs");
  }
  function handleNavigateToSignup() {
    navigate("Signup");
  }
  return (
    <KeyboardView>
      <Container>
        <FontAwesome name="user-circle" size={50} />

        <Title>Login</Title>

        <Input
          keyboardType={"email-address"}
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          secureTextEntry
          placeholder={"senha"}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <RectButton onPress={handleNavigateToHomeTabs} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>

        <Text style={styles.text}>Não tem cadastro? </Text>

        <RectButton onPress={handleNavigateToSignup} style={styles.button}>
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </RectButton>
      </Container>
    </KeyboardView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#000",
    borderRadius: 9,
    width: "70%",
    padding: 20,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  text: {
    marginTop: 20,
  },
});

export default Login;
