import React from 'react';
import {StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import AppErrorMessage from './AppErrorMessage';
import AppTextInput from './AppTextInput';

export default function AppFormField({name, ...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
