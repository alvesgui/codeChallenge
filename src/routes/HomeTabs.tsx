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
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
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
        activeBackgroundColor: "#d3d3d3",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#000",
      }}
    >
      <Screen
        name="ItemList"
        component={ItemList}
        options={{
          tabBarLabel: "",

          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="image" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="IncludePhoto"
        component={IncludePhoto}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="user-plus" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="user" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}

export default HomeTabs;
