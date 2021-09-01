import React, { useEffect, useState } from "react";
import { View, ScrollView, FlatList, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import Header from "../../components/Header";

import HomeCard from "../../components/HomeCard";

import firestore from "@react-native-firebase/firestore";

import styles from "./styles";

function ItemList() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const list = [];
        await firestore()
          .collection("items")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              const { itemId, name, itemImg, description } = doc.data();
              list.push({
                id: doc.id,
                itemId,
                name,
                itemImg,
                description,
              });
            });
          });
        setItems(list);

        if (loading) {
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchItems();
  }, [items]);


  return (
    <View style={styles.container}>
      <Header title="Seus Objetos" />

      <ScrollView style={styles.itemList}>
        <FlatList
          data={items}
          renderItem={({ item }) => <HomeCard item={item} /> }
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
    </View>
  );
}

export default ItemList;
