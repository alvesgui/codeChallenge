import React, {useState}from "react";

import { StatusBar } from 'expo-status-bar'
import {Text, View, TextInput, Picker, AsyncStorage} from 'react-native'
import { RectButton } from "react-native-gesture-handler";

import Header from "../../components/Header";
import InfoHeader from '../../components/InfoHeader'

import styles from "./styles";


import init from 'react_native_mqtt'


init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
})

var client, connected = false, topic = 'SensorTemp'

function Subscribe() {
  const [selectedValue, setSelectedValue] = useState("0");
  
    function initMqtt() {
      client = new Paho.MQTT.Client('broker.mqttdashboard.com', 8000, 'user123456')
      client.onConnectionLost = onConnectionLost
      client.onMessageArrived = onMessageArrived
      client.connect({ onSuccess: onConnect })
    }
  
    function onConnect() {
      connected = true
      client.subscribe(topic)
    }
  
    function sendMessage(message, topic){
      message = new Paho.MQTT.Message(message)
      message.destinationName = topic
      client.send(message)
    }
    
    function onConnectionLost(responseObject) {
      if (responseObject.errorCode !== 0) {
        connected = false
        console.log("onConnectionLost:" + responseObject.errorMessage)
      }
    }
    
    function onMessageArrived(message) {
      let msg = message.payloadString
      setBrokerText([...brokerText, msg])
    }
  
    const [text, onChangeText] = React.useState('')
    const [brokerText, setBrokerText] = React.useState([])


    return (
      <View style={styles.container}>
        <InfoHeader title="Informações" />
        <View style={styles.subContainer}>   
          {initMqtt()}
          <Text>status {!connected && 'não'} conectado</Text>
          <Text>{`mensagens no tópico ${topic}: `}</Text>
          {brokerText && brokerText.map((txt, i) => <Text key={i}>{txt}</Text>)}  
          <Text style={styles.label}>Tópico:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
          <Text style={styles.label}>QOS:</Text>
          <View>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
      </Picker>
    </View>
          
          <RectButton
            onPress={() => sendMessage(text, topic)}
            style={styles.button}> 
              <Text style={styles.buttonText}>Incresver</Text>
          </RectButton>
        </View>
      </View>
    )
}

export default Subscribe;