import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppTextInput from '../components/AppTextInput';
import AppErrorMessage from '../components/AppErrorMessage';
import AppButton from '../components/AppButton';
import Screen from '../components/Screen';
import AppText from '../components/AppText';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(8).label('Password'),
});

export default function LoginScreen() {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <AppTextInput
              placeholder="Your Email"
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onBlur={() => setFieldTouched('email')}
              textContentType="emailAddress" //just for IOS keychain
              onChangeText={handleChange('email')}
            />
            <AppErrorMessage error={errors.email} visible={touched.email} />
            <AppTextInput
              placeholder="Your password"
              icon="lock"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              textContentType="password" //just for IOS keychain
              onChangeText={handleChange('password')}
            />
            <AppErrorMessage
              error={errors.password}
              visible={touched.password}
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
