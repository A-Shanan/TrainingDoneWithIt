import React from "react";
import { View,StyleSheet } from "react-native";
import AppButton from "./app/components/AppButton";

import AppText from "./app/components/AppText";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
  <WelcomeScreen/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
