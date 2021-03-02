import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppText from './AppText';
import Icons from './Icons';

export default function CategoryPickerItem({item, onPress}) {
  return (
    <View style={styles.container}>
      <Icons
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: 'center',
    width: '33%',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 18,
  },
});
