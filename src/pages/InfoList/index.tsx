import React from "react";
import { View, Text } from "react-native";
import InfoHeader from "../../components/InfoHeader";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";
function InfoList() {
  return (
    <View style={styles.container}>
      <InfoHeader />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>Guilherme</Text>
        <Text style={styles.info}>
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </Text>
      </View>
    </View>
  );
}

export default InfoList;
