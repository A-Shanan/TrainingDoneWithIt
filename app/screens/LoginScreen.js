import React from 'react';
import {Image, StyleSheet} from 'react-native';
import * as Yup from 'yup';

import {AppForm, AppFormField, SubmitButton} from '../components/forms';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        <AppFormField
          name="email"
          placeholder="Your Email"
          icon="email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress" //just for IOS keychain
        />
        <AppFormField
          name="password"
          placeholder="Your password"
          icon="lock"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password" //just for IOS keychain
        />
        <SubmitButton title="Login" />
      </AppForm>
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
