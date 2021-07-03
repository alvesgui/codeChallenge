import React from "react";
import { View, ScrollView } from "react-native";

import Header from "../../components/Header";
import ListItem from "../../components/ListItem";

import styles from "./styles";

function ItemList(url: any) {
  console.log(url);
  return (
    <View style={styles.container}>
      <Header title="Watchlist" />
      <ScrollView style={styles.itemList}>
        <ListItem />
      </ScrollView>
    </View>
  );
}

export default ItemList;
