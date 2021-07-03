import React, { useState } from "react";
import { View, Alert, Text, Image, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

import * as ImagePicker from "expo-image-picker";
import storage from "@react-native-firebase/storage";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Header from "../../components/Header";

function IncludePhoto() {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { navigate } = useNavigation();

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
    uploadPhotoFirebase(image);
  }

  async function uploadPhotoFirebase(source: any) {
    let timestamp = Date.now();

    let pathToFile = "/items" + "/" + timestamp;

    let task = await storage().ref(pathToFile).putFile(source);

    try {
      await task;

      let url = await storage().ref(pathToFile).getDownloadURL();

      setUrl(url);
    } catch (e) {
      Alert.alert("Ops...", "Erro com o upload da foto de perfil ", [
        {
          text: "OK",
          onPress: () => null,
        },
      ]);
      console.error(e);
    }
  }
  function handleAddItem() {
    console.log({ name, description, image });
    alert("Successfully created item");
    navigate("ItemList", { url });
    setName("");
    setDescription("");
    setImage("");
  }

  return (
    <View style={styles.container}>
      <Header title="Create item" />
      <View style={styles.containerAdd}>
        <Text style={styles.title}>Data</Text>
        <View style={styles.profile}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
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
  );
}

export default IncludePhoto;
