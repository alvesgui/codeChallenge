import React from "react";
import { View, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";
import { FontAwesome } from "@expo/vector-icons";

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>{title}</Text>
        <RectButton>
          <FontAwesome name="sign-out" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
};

export default Header;
