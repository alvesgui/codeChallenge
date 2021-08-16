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

const InfoHeader: React.FC<HeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  function handleNavigateToInfoList() {
    navigate("ItemList");
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>{title}</Text>
        <RectButton onPress={handleNavigateToInfoList}>
          <FontAwesome name="times" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
};

export default InfoHeader;
