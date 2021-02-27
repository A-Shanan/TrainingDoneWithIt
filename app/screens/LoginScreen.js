import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {Formik} from 'formik';

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => console.log(values)}>
        {({handleChange, handleSubmit}) => (
          <>
            <AppTextInput
              placeholder="Your Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress" //just for IOS keychain
              onChangeText={handleChange('email')}
            />
            <AppTextInput
              placeholder="Your password"
              icon="lock"
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password" //just for IOS keychain
              onChangeText={handleChange('password')}
            />
            <AppButton title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
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
