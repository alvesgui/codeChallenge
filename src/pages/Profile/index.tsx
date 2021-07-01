import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./styles";
function Profile() {
  return (
    <View style={styles.container}>
      <Header title="Perfil" />
      <View style={styles.profile}>
        <FontAwesome name="user-circle" size={50} />
        <Text style={styles.name}>Nome: Guilherme</Text>
        <Text style={styles.email}>Email: gui@gmail.com</Text>
      </View>
    </View>
  );
}

export default Profile;
