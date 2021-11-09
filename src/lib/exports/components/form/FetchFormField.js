import React from 'react';
import FetchFormSelect from './fields/FetchFormSelect';
import FetchFormCheckboxRadio from './fields/FetchFormCheckboxRadio';
import FetchFormText from './fields/FetchFormText';
import TextareaField from './elements/TextareaField';

const FetchFormField = ({ fieldData }) => {
  if (fieldData.html.type === 'select') {
    return <FetchFormSelect field={fieldData} />;
  } else if (
    fieldData.html.type === 'checkbox' ||
    fieldData.html.type === 'radio'
  ) {
    return <FetchFormCheckboxRadio field={fieldData} />;
  } else if (fieldData.html.type === 'textarea') {
    return <TextareaField field={fieldData} />;
  }
  return <FetchFormText field={fieldData} />;
};

export default FetchFormField;
