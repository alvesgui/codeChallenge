import React from "react";

import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage} from 'react-native'

import init from 'react_native_mqtt'


init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  sync: {},
})

var client, connected = false, topic = 'Maguilove3000'

function InfoList() {

  
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
        {initMqtt()}
        <Text>status {!connected && 'não'} conectado</Text>
        <Text>{`mensagens no tópico ${topic}: `}</Text>
        {brokerText && brokerText.map((txt, i) => <Text key={i}>{txt}</Text>)}  
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <Button
          title="Enviar"
          onPress={() => sendMessage(text, topic)}
        />
        <StatusBar style="auto" />
      </View>
    )
}

export default InfoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    width: 200,
    borderWidth: 1,
  },
})
