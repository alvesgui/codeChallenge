import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Header from "../../components/Header";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles";

function AddList() {
  const { navigate } = useNavigation();

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  async function imagePicker() {
    if (Constants.platform?.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA);

      if (status !== "granted") {
        alert("Precisamos da permissão");
        return;
      }
    }
    const data = await ImagePicker.launchImageLibraryAsync({});

    console.log(data);
  }

  function handleAddItem() {
    console.log({ itemName, description, image });
  }

  // async function uploadImage() {
  //   const data = new FormData();

  //   data.append('image', {

  //   })
  // }

  return (
    <View style={styles.container}>
      <Header title="Adicionar item" />
      <View style={styles.containerAdd}>
        <Text style={styles.title}>Dados</Text>
        <View style={styles.profile}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={itemName}
            onChangeText={(text) => setItemName(text)}
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />

          <View style={styles.containerButton}>
            <RectButton onPress={imagePicker} style={styles.buttonImage}>
              <Text style={styles.buttonText}>Escolher Imagem</Text>
            </RectButton>
            <RectButton onPress={handleAddItem} style={styles.button}>
              <Text style={styles.buttonText}>Salvar</Text>
            </RectButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AddList;
