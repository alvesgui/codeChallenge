import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

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
      <Text style={styles.logo}>UP</Text>

      <Text style={styles.title}>Partner UP</Text>
      <Text style={styles.subtitle}>Fintech + A.I.</Text>

      <View style={styles.buttonsContainer}>
        <RectButton onPress={handleNavigateToLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </RectButton>

        <RectButton onPress={handleNavigateToSignup} style={styles.button}>
          <Text style={styles.buttonText}>Signup</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Landing;
