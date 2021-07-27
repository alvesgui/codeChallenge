import { StatusBar } from "expo-status-bar";
import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  LondrinaShadow_400Regular,
} from "@expo-google-fonts/londrina-shadow";

import { Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";

import AppStack from "./src/routes/AppStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    LondrinaShadow_400Regular,
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }
}
