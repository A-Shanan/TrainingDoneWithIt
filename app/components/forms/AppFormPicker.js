import React from 'react';
import {useFormikContext} from 'formik';

import AppPicker from '../AppPicker';
import AppErrorMessage from './AppErrorMessage';

export default function AppFormPicker({
  items,
  name,
  PickerItemComponent,
  placeholder,
  width,
}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        PickerItemCompoenet={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <AppErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
