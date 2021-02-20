import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function ListItemDeleteAction({onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon name="magnify" color="white" size={35} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
