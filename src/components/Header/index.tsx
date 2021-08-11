import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import auth from "@react-native-firebase/auth";

import styles from "./styles";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handlesignOut() {
    auth()
      .signOut()
      .then(() => {});
    navigate("Landing");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>{title}</Text>
        <RectButton onPress={handlesignOut}>
          <FontAwesome name="sign-out" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
};

export default Header;
