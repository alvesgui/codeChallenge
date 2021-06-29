import React from "react";
import { View, Text } from "react-native";
import InfoHeader from "../../components/InfoHeader";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";
function InfoList() {
  return (
    <View style={styles.container}>
      <InfoHeader />
    </View>
  );
}

export default InfoList;
