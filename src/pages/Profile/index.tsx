import React from "react";
import { View, Text } from "react-native";
import Header from "../../components/Header";
import { FontAwesome } from "@expo/vector-icons";

import firebase from "@react-native-firebase/app";

import styles from "./styles";

function Profile() {
  const user = firebase.auth().currentUser;

  if (user) {
    return (
      <View style={styles.container}>
        <Header title="Profile" />
        <View style={styles.profile}>
          <FontAwesome name="user-circle" size={50} />
          <Text style={styles.name}>Dados do usuário</Text>
          <Text style={styles.email}>Email: {user.email}</Text>
        </View>
      </View>
    );
  }
}

export default Profile;
