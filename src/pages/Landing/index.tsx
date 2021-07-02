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
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>UP</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Partner UP</Text>
        <Text style={styles.subtitle}>Fintech + A.I.</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <RectButton onPress={handleNavigateToLogin} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </RectButton>

        <RectButton onPress={handleNavigateToSignup} style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </RectButton>
      </View>
    </View>
  );
}

export default Landing;
