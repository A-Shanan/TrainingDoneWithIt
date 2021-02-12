import React from "react";
import { View,StyleSheet, SafeAreaView } from "react-native";

import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";

export default function App() {
  return (
  <SafeAreaView>
    <View style={{backgroundColor: '#f8f4f4',
      padding: 20,
      paddingTop: 100}}
    >
      <Card
      title="Red jacket for sale"
      subTitle="$100"
      image={require("./app/assets/jacket.jpg")}
      />
    </View>
  </SafeAreaView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
