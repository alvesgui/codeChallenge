import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

import ItemList from "../pages/ItemLIst";
import Profile from "../pages/Profile";
import IncludePhoto from "../pages/IncludePhoto";

const { Navigator, Screen } = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          position: "absolute",
          borderRadius: 15,
          elevation: 0,
          shadowOpacity: 0.5,
          shadowRadius: 4,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          bottom: 15,
          left: 10,
          right: 10,
          height: 90,
          backgroundColor: "#fff",
        },
      }}
    >
      <Screen
        name="ItemList"
        component={ItemList}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="link"
                size={30}
                color={focused ? "#072333" : "#748c94"}
              />
            );
          },
        }}
      />
      <Screen
        name="IncludePhoto"
        component={IncludePhoto}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="plus"
                size={30}
                color={focused ? "#072333" : "#748c94"}
              />
            );
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="connectdevelop"
                size={30}
                color={focused ? "#072333" : "#748c94"}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default HomeTabs;
