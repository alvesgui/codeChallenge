import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function InfoHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <RectButton onPress={navigation.goBack}>
          <FontAwesome name="arrow-left" size={20} color="#fff" />
        </RectButton>
      </View>
    </View>
  );
}

export default InfoHeader;
