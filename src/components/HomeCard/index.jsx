import React from "react";
import { Text, Image, View } from "react-native";

import { Card, ItemInfo } from "../../styles/HomeStyles";
import { FontAwesome } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

import firebase from "@react-native-firebase/app";

function HomeCard({ item }) {
  const { navigate } = useNavigation();

  const user = firebase.auth().currentUser;

  function handleNavigateToInfoList() {
    navigate("InfoList",{item});
  }
  return (
    <View>
      {user?.uid === item.itemId ? (
        <View style={styles.card}>
        <ItemInfo>
          <Image style={styles.photo} source={{ uri: item.itemImg }} />

          <Text style={styles.text}>{item.name}</Text>
          <RectButton onPress={handleNavigateToInfoList} style={styles.button}>
            <FontAwesome name="plus-circle" size={32} color={"#000"} />
          </RectButton>
        </ItemInfo>
        </View>
      ) : (
        <View />
      )}
    </View>
  );
}

export default HomeCard;
