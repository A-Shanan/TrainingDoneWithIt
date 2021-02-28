import React from 'react';
import {StyleSheet} from 'react-native';

import AppText from '../AppText';

export default function AppErrorMessage({error, visible}) {
  if (visible && error) return <AppText style={styles.error}>{error}</AppText>;
  return null;
}
const styles = StyleSheet.create({
  error: {color: 'crimson'},
});
