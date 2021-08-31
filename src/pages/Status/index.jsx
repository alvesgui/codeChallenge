import React, { useState } from "react";
import { View, Text, TextInput, AsyncStorage } from "react-native";
import Header from "../../components/Header";

import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

import init from "react_native_mqtt";

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
});

var client,
  connected = false,
  topic = "SensorTemp";

function Status() {
  const [hostName, setHostName] = useState("broker.mqttdashboard.com");
  const [porta, setPorta] = useState("");
  const [clienteId, setClienteId] = useState("");
  const [status, setStatus] = useState(false);
  const [brokerText, setBrokerText] = useState([])
  const [text, onChangeText] = useState('')

  function onPressConection() {
    setStatus(true);
    console.log(status);
  }

  function onPressDesconection() {
    setStatus(false);
    console.log(status);
  }

  function initMqtt() {
    client = new Paho.MQTT.Client('broker.mqttdashboard.com', 8000, 'user123456')
    client.onConnectionLost = onConnectionLost
    client.connect({ onSuccess: onConnect })
  }

  function onConnect() {
    if(hostName && porta && clienteId) {
      setStatus(true);
      connected = true
      
    }else
    {
      alert("Preencha Todos os campos!");
    }
  }

  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      setStatus(false);
      connected = false
      console.log("onConnectionLost:" + responseObject.errorMessage)
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Status" />
      <View style={styles.profile}>
        <View style={styles.containerAdd}>
          <Text style={styles.title}>Status da Conexão</Text>
          <View style={styles.profile}>
            <Text style={styles.label}>Status:</Text>
            {status ? (
              <Text style={styles.label}>
                Conectado em {hostName}:{porta}
              </Text>
            ) : (
              <Text style={styles.label}>Desconectado</Text>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

export default Status;
