import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { KeyboardView, Container, Input } from "./styles";
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
          alert("Usuário criado com sucesso!");
          navigate("Login");
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          if (error.code === "auth/email-already-in-use") {
            alert("Email já está sendo utilziado!");
          }

          if (error.code === "auth/invalid-email") {
            alert("Email inválido!");
          }
        });
    } else {
      alert("Preencha todos os campos");
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
        <FontAwesome name="user-plus" size={50} color={"#fff"} />
        <Text style={styles.title}>Cadastrar</Text>

        <Input
          keyboardType={"email-address"}
          placeholder={"email@email.com"}
          placeholderTextColor={"#b5b1b1"}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          secureTextEntry
          placeholder={"******"}
          placeholderTextColor={"#b5b1b1"}
          maxLength={6}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <RectButton onPress={handleCreateUser} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </RectButton>

        <Text onPress={handleNavigateToLogin} style={styles.text}>
          Já possui Cadastro? Faça Login
        </Text>
      </Container>
    </KeyboardView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#082130",
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
    color: "#fff",
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    paddingBottom: 20,
    paddingTop: 10,
    lineHeight: 38,
    fontFamily: "Jost_400Regular",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default Signup;
