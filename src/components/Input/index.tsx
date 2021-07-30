import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import styles from "./styles";

function Input(props: any) {
  const [isVisible, setIsVisble] = useState(props.secureTextEntry);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={"#ffff"}
        {...props}
        secureTextEntry={isVisible}
      />
      <FontAwesome name="circle" size={26} color={"#444"} style={styles.icon} />
      {props.secureTextEntry && (
        <TouchableOpacity onPress={() => setIsVisble(!isVisible)}>
          <FontAwesome
            name={isVisible ? "eye" : "eye-slash"}
            size={26}
            color={"#000"}
            style={styles.iconSecret}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

export default Input;
