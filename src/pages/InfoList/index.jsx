import React from "react";
import { View, Text, Image} from "react-native";
import InfoHeader from "../../components/InfoHeader";

import styles from "./styles";
function InfoList({ route}) {

  return (
    <View style={styles.container}>
      <InfoHeader />
      <View style={styles.infoContainer}>
        <View style={styles.wrapperContainer}>
        <Image style={styles.photo} source={{ uri: route.params.item.itemImg }} /> 
        <Text style={styles.title}>{route.params.item.name}</Text>
        </View>
        <Text style={styles.info}>{route.params.item.description}
        </Text>
      </View>
    </View>
  );
}

export default InfoList;
