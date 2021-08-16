import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import HomeTabs from "./HomeTabs";
import InfoList from "../pages/InfoList";
import BrokerTabs from "./BrokerTabs";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Landing" component={Landing} />
        <Screen name="Login" component={Login} />
        <Screen name="Signup" component={Signup} />
        <Screen name="HomeTabs" component={HomeTabs} />
        <Screen name="InfoList" component={InfoList} />
        <Screen name="BrokerTabs" component={BrokerTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
