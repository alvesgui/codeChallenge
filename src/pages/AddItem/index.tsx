import React from "react";
import { View, Text, TextInput } from "react-native";
import Header from "../../components/Header";
import { RectButton } from "react-native-gesture-handler";
import styles from "./styles";
import { KeyboardView } from "./styles";
function AddList() {
  return (
    <View style={styles.container}>
      <Header title="Adicione a lista" />
      <KeyboardView>
        <Text style={styles.title}>Dados</Text>
        <View style={styles.profile}>
          <Text style={styles.label}>Nome</Text>
          <TextInput style={styles.input} />

          <Text style={styles.label}>Descrição</Text>
          <TextInput style={[styles.input, { height: 80 }]} multiline />

          <Text style={styles.label}>Imagem</Text>
          <TextInput style={[styles.input, { height: 80 }]} multiline />

          <View style={styles.containerButton}>
            <RectButton style={styles.button}>
              <Text style={styles.buttonText}>Salvar</Text>
            </RectButton>
          </View>
        </View>
      </KeyboardView>
    </View>
  );
}

export default AddList;
