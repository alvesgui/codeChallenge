import React from "react";
import { StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import auth from "@react-native-firebase/auth";

import { KeyboardView, Title, Container, Input } from "./styles";
import { useState } from "react";

function Login() {
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleNavigateToHomeTabs() {
    if (email && password) {
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigate("HomeTabs");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          if (
            error.code === "auth/user-nout-found" ||
            error.code === "auth/wrong-password" ||
            error.code === "auth/invalid-email"
          ) {
            alert("Wrong email or password. Try again!");
          }
        });
    } else {
      alert("Fill in all fields!");
    }
  }
  function handleNavigateToSignup() {
    navigate("Signup");
  }
  return (
    <KeyboardView>
      <Container>
        <FontAwesome name="user-circle" size={50} color={"#000"} />

        <Title>Login</Title>

        <Input
          keyboardType={"email-address"}
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Input
          secureTextEntry
          placeholder={"password"}
          maxLength={6}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <RectButton onPress={handleNavigateToHomeTabs} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </RectButton>

        <Text onPress={handleNavigateToSignup} style={styles.text}>
          Don't have an account? Create here
        </Text>
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
    paddingTop: 60,
    color: "#000",
    fontSize: 16,
  },
});

export default Login;
