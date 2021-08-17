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

function Profile() {
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
      <Header title="Conexão MQTT" />
      <View style={styles.profile}>
        <View style={styles.containerAdd}>
          <Text style={styles.title}>Broker HIVEMQ</Text>
          <View style={styles.profile}>
            <Text style={styles.label}>Hostname:</Text>
            <TextInput
              style={styles.input}
              value={hostName}
              onChangeText={(text) => setHostName(text)}
              editable={!status}
              placeholder={"broker.mqttdashboard.com"}
            />
            <Text style={styles.label}>Cliente Id:</Text>
            <TextInput
              style={[styles.input]}
              value={clienteId}
              onChangeText={(text) => setClienteId(text)}
              editable={!status}
              placeholder={"userid123456"}
            />
            <Text style={styles.label}>Porta:</Text>
            <View style={styles.clearSession}>
              <TextInput
                style={[styles.inputPort]}
                value={porta}
                onChangeText={(text) => setPorta(text)}
                editable={!status}
                maxLength={4}
                placeholder={"8000"}
                keyboardType={"numeric"}
              />
            </View>

            <View style={styles.containerButton}>
              {status ? (
                <RectButton
                  onPress={onConnectionLost}
                  style={styles.buttonDesc}
                >
                  <Text style={styles.buttonText}>Desconectar</Text>
                </RectButton>
              ) : (
                <RectButton onPress={onConnect} style={styles.button}>
                  <Text style={styles.buttonText}>Conectar</Text>
                </RectButton>
              )}
            </View>
            <Text style={styles.label}>Status:</Text>
            {status ? (
              <Text style={styles.label}>
                Conectado em {hostName}:{porta}
              </Text>
            ) : (
              <Text style={styles.label}>Desconectado</Text>
            )}

          <Text>{`mensagens`}</Text>
          {brokerText && brokerText.map((txt, i) => <Text key={i}>{txt}</Text>)}  
          </View>
        </View>
      </View>
    </View>
  );
}

export default Profile;
