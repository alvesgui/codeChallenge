import React, { useState } from "react";
import { View, Text, TextInput, Image, ScrollView } from "react-native";
import Header from "../../components/Header";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";

import * as ImagePicker from "expo-image-picker";

// import * as ImagePicker from "react-native-image-picker";

import styles from "./styles";

function AddList() {
  const { navigate } = useNavigation();

  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  function handleAddItem() {
    navigate("HomeTabs");
    setItemName("");
    setDescription("");
    setImage("");
  }

  async function handleAddImage() {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      alert("We need access to your photos... .");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (result.cancelled) {
      return;
    }

    const { uri: image } = result;

    setImage(image);
  }
  return (
    <ScrollView style={styles.itemList}>
      <View style={styles.container}>
        <Header title="Criar um objeto" />
        <View style={styles.containerAdd}>
          <Text style={styles.title}>Data</Text>
          <View style={styles.profile}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              value={itemName}
              onChangeText={(text) => setItemName(text)}
            />

            <Text style={styles.label}>Description</Text>
            <TextInput
              style={[styles.input]}
              value={description}
              onChangeText={(text) => setDescription(text)}
            />
            <Text style={styles.label}>Image</Text>
            <View style={styles.uploadedImageContainer}>
              <Image source={{ uri: image }} style={styles.uploadedImage} />
            </View>

            <View style={styles.containerButton}>
              <RectButton onPress={handleAddImage} style={styles.buttonImage}>
                <FontAwesome name="image" size={20} color={"#fff"} />
              </RectButton>
              <RectButton onPress={handleAddItem} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
              </RectButton>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default AddList;
