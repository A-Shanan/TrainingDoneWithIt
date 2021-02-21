import React from 'react';
import {Platform, StyleSheet, Text, TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';

export default function AppPicker({icon, placeholder, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <Icon style={styles.icon} name={icon} size={30} color={colors.medium} />
      )}
      <AppText style={styles.text}>{placeholder}</AppText>
      <Icon name="chevron-down" size={30} color={colors.medium} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});
