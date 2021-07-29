import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import Header from "../../components/Header";
import { FontAwesome } from "@expo/vector-icons";

import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

function Profile() {
  const [hostName, setHostName] = useState("broker.mqttdashboard.com");
  const [porta, setPorta] = useState("");
  const [clienteId, setClienteId] = useState("");

  return (
    <View style={styles.container}>
      <Header title="Conexão MQTT" />
      <View style={styles.profile}>
        <View style={styles.containerAdd}>
          <Text style={styles.title}>Broker HIVEMQ</Text>
          <View style={styles.profile}>
            <Text style={styles.label}>Hostname</Text>
            <TextInput
              style={styles.input}
              value={hostName}
              onChangeText={(text) => setHostName(text)}
              editable={false}
            />

            <Text style={styles.label}>Porta</Text>
            <TextInput
              style={[styles.input]}
              value={porta}
              onChangeText={(text) => setPorta(text)}
            />
            <Text style={styles.label}>Cliente Id</Text>
            <TextInput
              style={[styles.input]}
              value={clienteId}
              onChangeText={(text) => setClienteId(text)}
            />

            <View style={styles.containerButton}>
              <RectButton onPress={() => {}} style={styles.button}>
                <Text style={styles.buttonText}>Conectar</Text>
              </RectButton>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Profile;
