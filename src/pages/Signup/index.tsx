import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { KeyboardView, Title, Container, Input } from "./styles";
// import firebase from "../../../firebaseconection";

interface User {
  name?: string;
  email?: string;
  password?: string;
}

function Signup() {
  const { navigate } = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleCadastro() {
    // firebase
    //   .auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     navigate("Login");
    //   })
    //   .catch(() => {});
    navigate("Login");
  }
  function handleNavigateToLogin() {
    navigate("Login");
  }
  return (
    <KeyboardView>
      <Container>
        <FontAwesome name="user-plus" size={50} />
        <Title>Cadastra-se</Title>
        <Input
          placeholder={"Nome"}
          returnKeyType={"next"}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          keyboardType={"email-address"}
          placeholder={"Email"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          secureTextEntry
          placeholder={"senha"}
          maxLength={6}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <RectButton onPress={handleCadastro} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </RectButton>

        <Text style={styles.text}>Faça login </Text>

        <RectButton onPress={handleNavigateToLogin} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
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

export default Signup;
