import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppTextInput
        placeholder="Your Email"
        icon="email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        textContentType="emailAddress" //just for IOS keychain
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        placeholder="Your password"
        icon="lock"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="password" //just for IOS keychain
        onChangeText={(text) => setPassword(text)}
      />
      <AppButton title="Login" onPress={() => console.log(email, password)} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
});
