import React, {useState} from "react";
import { Text, Image, View, Switch, TouchableOpacity } from "react-native";

import { Card, ItemInfo } from "../../styles/HomeStyles";

import styles from "./styles";

import { useNavigation } from "@react-navigation/native";

import firebase from "@react-native-firebase/app";

function HomeCard({ item }) {
  const { navigate } = useNavigation();

  const [isConected, setIsConected] = useState(false);

  const user = firebase.auth().currentUser;

  function handleNavigateToInfoList() {
    navigate("InfoList",{item});
  }

  function onConected() {
    setIsConected(previousState => !previousState)
  }

  return (
    <View>
      {user?.uid === item.itemId ? 
        (
          <View style={styles.card}>
            <ItemInfo>
              <TouchableOpacity onPress={handleNavigateToInfoList}>
                <Image style={styles.photo} source={{ uri: item.itemImg }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNavigateToInfoList}>
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
              <Switch 
                trackColor={{false: '#cbcbcb', true: '#cbcbcb'}}
                thumbColor={!isConected ? '#cf0e0e' : '#008000'}
                onValueChange={onConected}
                value={isConected}
              />
            </ItemInfo>
          </View>
        ) : 
        (
        <View />
        )}
    </View>
  );
}

export default HomeCard;
