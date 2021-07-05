import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function ListItem({item}) {
  const { navigate } = useNavigation();
  function handleNavigateToInfoList() {
    navigate("InfoList");
  }
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
       <Text>{item.description}</Text>
      </View>
    </View>
  );
}

export default ListItem;
