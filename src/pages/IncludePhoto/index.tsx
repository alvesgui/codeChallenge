import React, { useState } from "react";
import { View, Alert, Text, Image, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import Header from "../../components/Header";
import * as ImagePicker from "expo-image-picker";

import storage from "@react-native-firebase/storage";
import firestore from "@react-native-firebase/firestore";
import firebase from "@react-native-firebase/app";

import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

function IncludePhoto() {
  const [image, setImage] = useState("");
  const [upload, setUpload] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [itemImg, setItemImg] = useState("");

  const { navigate } = useNavigation();
  const user = firebase.auth().currentUser;

  async function handleAddItem() {
    const imageURL = await uploadPhotoFirebase(image);

    firestore()
      .collection("items")
      .add({
        itemId: user?.uid,
        name: name,
        description: description,
        itemImg: imageURL,
      })
      .then(() => {
        navigate("ItemList");
        Alert.alert("Added", "Item successfully added", [
          {
            text: "OK",
            onPress: () => null,
          },
        ]);

        setName("");
        setDescription("");
        setImage("");
      })
      .catch(() => {
        console.log("Algo deu errado!");
      });
  }

  async function uploadPhotoFirebase(image: any) {
    let timestamp = Date.now();

    let pathToFile = "/items" + "/" + timestamp;

    const storageRef = storage().ref(pathToFile);
    let task = await storageRef.putFile(image);

    try {
      await task;

      let url = await storageRef.getDownloadURL();

      setUpload(url);

      return url;
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
  async function handleAddImg() {
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
            <RectButton onPress={handleAddImg} style={styles.buttonImage}>
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
