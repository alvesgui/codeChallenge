import React, { useEffect, useState } from "react";
import { View, ScrollView, FlatList } from "react-native";

import Header from "../../components/Header";
import ListItem from "../../components/ListItem";

import firestore from "@react-native-firebase/firestore";

import styles from "./styles";

function ItemList() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const list = [];
        firestore()
          .collection("items")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const { itemId, name, itemImg, description } = doc.data();
              list.push({
                itemId: itemId,
                name,
                itemImg,
                description,
              });
            });
          });
        setItem(list);

        if (loading) {
          setLoading(false);
        }
        console.log("Items ", list);
      } catch (e) {
        console.log(e);
      }
    };
    fetchItems();
  }, []);

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
