import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { KeyboardView, Title, Container, Input } from "./styles";
import auth from "@react-native-firebase/auth";

interface User {
  name?: string;
  email?: string;
  password?: string;
}

function Signup() {
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleCreateUser() {
    if (email && password) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert("User created successfully!");
          navigate("Login");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert("Email already in use!");
          }

          if (error.code === "auth/invalid-email") {
            alert("Invalid email!");
          }
        });
    } else {
      alert("Fill in all fields!");
    }
  }

  function handleNavigateToLogin() {
    navigate("Login");
    setEmail("");
    setPassword("");
  }
  return (
    <KeyboardView>
      <Container>
        <FontAwesome name="user-plus" size={50} color={"#000"} />
        <Title>Sign Up</Title>

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
        <RectButton onPress={handleCreateUser} style={styles.button}>
          <Text style={styles.buttonText}>Create</Text>
        </RectButton>

        <Text onPress={handleNavigateToLogin} style={styles.text}>
          Already have registration? Sign In
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

export default Signup;
