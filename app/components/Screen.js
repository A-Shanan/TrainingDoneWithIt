import React from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar} from 'react-native';

export default function Screen({children, style}) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.os === 'android' ? StatusBar.currentHeight : 0, //for android statusBar,
  },
});
