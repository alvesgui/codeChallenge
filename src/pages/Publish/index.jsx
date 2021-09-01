import React, {useState}from "react";

import {Text, View, TextInput, Picker,AsyncStorage} from 'react-native'
import { RectButton, ScrollView } from "react-native-gesture-handler";

import RNPickerSelect from 'react-native-picker-select';
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


var client, connected = false, topic2 = 'SensorTemp'



function Publish() {

  const [qos, setQos] = useState("0");
  const [historic, setHistoric] = useState(false)
  const[topic, setTopic] = useState("sensorTemp")
    
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
    const [title, setTitle] = useState("Exibir")
    const [textTopic, onChanheTextTopic] = React.useState('')
    const [brokerText, setBrokerText] = React.useState([])


    return (
      <ScrollView style={styles.scrol}>
      <View style={styles.container}>
        <InfoHeader title="Publish" />
        <View style={styles.subContainer}>   
          {initMqtt()}
          <Text style={styles.buttonText}>Status: {!connected && 'Não'} Conectado</Text>
          <View style={styles.msgTopic}>
          <Text style={styles.label}>Tópico:</Text>
          <TextInput
            style={styles.input}
            onChangeText={setTopic}
            value={topic}
          />
          <Text style={styles.label}>Mensagem:</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
           <Text style={styles.label}>QOS:</Text>
           <Picker
        selectedValue={qos}
        style={{ height: 20, width: 100, backgroundColor: '#fff', color: '#fff', borderWidth: 1.4,
        borderColor: "#fff",
        borderRadius: 9,}}
        onValueChange={(itemValue, itemIndex) => setQos(itemValue)}
      >
        <Picker.Item label="0" value="0" />
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
      </Picker>

        <View style={styles.containerButton}>
          <RectButton
            onPress={() => sendMessage(text, topic)}
            style={styles.button}> 
              <Text style={styles.buttonText}>Enviar Mensagem</Text>
          </RectButton>
          </View>
          </View>
          <RectButton
            onPress={() => setHistoric(!historic)}
            style={styles.buttonHist}> 
              <Text style={styles.buttonTextHist}>{title} Histórico</Text>
          </RectButton>
          {historic ?   <><View style={styles.sendMsg}>
              <Text style={styles.label}>{`Histórico de msgs enviadas no tópico ${topic}: `}</Text>
              <View style={styles.containerMsg}>
                {brokerText && brokerText.map((txt, i) => <Text style={styles.msg} key={i}>{txt}</Text>)}
              </View>

            </View><RectButton
              onPress={() => setBrokerText([])}
              style={styles.buttonClear}
            >
                <Text style={styles.buttonText}>Limpar</Text>
              </RectButton></> : <View/>  }
         
        </View>
      </View>
      </ScrollView>
    )
}

export default Publish;