import React, { useState } from "react";
import { View, Alert, Text, Image, TextInput, ActivityIndicator, TouchableOpacity} from "react-native";
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
  const [image, setImage] = useState("data:image/jpeg;base64,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");
  const [upload, setUpload] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [transferred, setTransferred] = useState(0);
  const [uploading, setUploading] = useState(false);

  const { navigate } = useNavigation();
  const user = firebase.auth().currentUser;

  async function handleAddItem() {
    
    if (name && description && image ) {
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
          Alert.alert("Adicionado", "Item adicionado com sucesso.", [
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
      }else {
        alert("Preencha todos os campos!");
      }
    }

  async function uploadPhotoFirebase(image) {
    let timestamp = Date.now();

    let pathToFile = "/items" + "/" + timestamp;

    setUploading(true);
    setTransferred(0);

    const storageRef = storage().ref(pathToFile);
    let task = storageRef.putFile(image);

    task.on("state_changed", (taskSnapshot) => {
      console.log(
        `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
      );

      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) *
          100
      );
    });

    try {
      await task;

      let url = await storageRef.getDownloadURL();

      setUploading(false);
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
      <Header title="Criar objeto" />
      <View style={styles.containerAdd}>
        <Text style={styles.title}>Dados do Objeto</Text>
        <View style={styles.profile}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input]}
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
          <Text style={styles.label}>Image</Text>
          <View style={styles.uploadedImageContainer}>
            {image ? (<Image source={{ uri: image }} style={styles.uploadedImage} />) : (<View/>)}
            
          </View>
          <View style={styles.containerButton}>
            <TouchableOpacity onPress={handleAddImg}>
              <Text
                style={styles.textButtonImage}>
                alterar imagem
              </Text>
          </TouchableOpacity>
            {uploading ? (
              <View style={styles.wrapper}>
                <Text style={styles.textTransferred}>{transferred} % Completado</Text>
                <ActivityIndicator size="large" color="#030303" />
              </View>
            ) : (
              <RectButton onPress={handleAddItem} style={styles.button}>
                <Text style={styles.buttonText}>Salvar</Text>
              </RectButton>
            )}
            
          </View>
        </View>
      </View>
    </View>
  );
}

export default IncludePhoto;
