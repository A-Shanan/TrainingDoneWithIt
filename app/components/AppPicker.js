import React, {useState} from 'react';
import {
  Button,
  Modal,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import Screen from './Screen';
import AppText from './AppText';

export default function AppPicker({icon, placeholder, ...otherProps}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon
              style={styles.icon}
              name={icon}
              size={30}
              color={colors.medium}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <Icon name="chevron-down" size={30} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="close" onPress={() => setModalVisible(false)} />
        </Screen>
      </Modal>
    </>
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
