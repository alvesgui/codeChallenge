import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import Publish from "../pages/Publish";
import Subscribe from "../pages/Subscribe";

const { Navigator, Screen } = createBottomTabNavigator();

function BrokerTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0.5,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          height: 70,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#082130",
        inactiveTintColor: "#000",
        activeTintColor: "#fff",
      }}
    >
      <Screen
        name="Publish"
        component={Publish}
        options={{
          tabBarLabel: "Publicar",

          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="arrow-up" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Subscribe"
        component={Subscribe}
        options={{
          tabBarLabel: "Inscrever-se",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="arrow-down" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}

export default BrokerTabs;
