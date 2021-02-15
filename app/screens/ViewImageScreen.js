import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Entypo name="aircraft" color="#0000" size={50} />
      </View>
      <View style={styles.deleteIcon}>
        
      </View>
      <Image
        style={styles.image}
        resizeMode={"contain"}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
});

export default ViewImageScreen;
