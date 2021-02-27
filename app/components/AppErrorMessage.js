import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import AppText from './AppText';

export default function AppErrorMessage({error}) {
  if (!error) return null;
  return <AppText style={styles.color}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: {
    color: 'crimson',
  },
});
