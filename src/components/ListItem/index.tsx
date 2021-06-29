import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function ListItem() {
  const { navigate } = useNavigation();
  function handleNavigateToInfoList() {
    navigate("InfoList");
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image
          style={styles.photo}
          source={{ uri: "http://github.com/alvesgui.png" }}
        />

        <Text style={styles.title}>Guilherme</Text>

        <RectButton onPress={handleNavigateToInfoList} style={styles.button}>
          <FontAwesome name="plus-circle" size={32} />
        </RectButton>
      </View>
    </View>
  );
}

export default ListItem;
