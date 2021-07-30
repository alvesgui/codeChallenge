import React from "react";
import { View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import logo from "../../assets/logo.png";
import icon from "../../assets/icon.png";

import styles from "./styles";

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToLogin() {
    navigate("Login");
  }
  function handleNavigateToSignup() {
    navigate("Signup");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IoT Manager</Text>
      <View style={styles.logoContainer}>
        <Image source={icon} style={styles.img} resizeMode="contain" />
      </View>

      <Text style={styles.subTitle}>
        Gerencie seus dispositivos IoT {"\n"} de forma fácil
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToLogin}
          activeOpacity={0.5}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToSignup}
          activeOpacity={0.5}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Criar Conta</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Landing;
