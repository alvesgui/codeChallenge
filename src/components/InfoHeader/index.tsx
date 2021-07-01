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
      <RectButton onPress={navigation.goBack}>
        <FontAwesome name="arrow-left" size={25} color="#fff" />
      </RectButton>
    </View>
  );
}

export default InfoHeader;
