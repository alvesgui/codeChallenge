import React, { useState } from "react";
import { FlatList, View, Dimensions } from "react-native";



const { width } = Dimensions.get("window");

function ListaHorizontal({data}) {
  console.log(data);
  return (
    <FlatList
      data={data}
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => String(item)}
      horizontal
      renderItem={({ item }) => (
        <View style={{ backgroundColor: item, height: width / 2.6, width: 10 }} />
      )}
    />
  );
}

export default ListaHorizontal;
