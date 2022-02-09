import React from 'react';
import { Field } from 'react-final-form';
import FetchFormCheckbox from './fields/FetchFormCheckbox';
import FetchFormRadio from './fields/FetchFormRadio';
import FetchFormSelect from './fields/FetchFormSelect';
import FetchFormInput from './fields/FetchFormInput';
import FetchFormTextarea from './fields/FetchFormTextarea';

const FetchFormItem = ({ formItem }) => {
  const chooseField = (input) => {
    switch (formItem.fieldType) {
      case 'select':
        return (
          <FetchFormSelect
            label={formItem.label}
            options={formItem.options}
            html={input}
          />
        );
      case 'checkbox':
        return <FetchFormCheckbox label={formItem.label} html={input} />;
      case 'radio':
        return (
          <FetchFormRadio
            label={formItem.label}
            options={formItem.options}
            fieldName={formItem.fieldName}
            html={input}
          />
        );
      case 'textarea':
        return <FetchFormTextarea label={formItem.label} html={input} />;
      default:
        return (
          <FetchFormInput
            label={formItem.label}
            html={input}
            format={formItem.format}
          />
        );
    }
  };

  return (
    <div className='fetch-form-item'>
      <Field {...formItem.fieldHtml}>
        {({ input, meta }) => (
          <>
            {chooseField(input)}
            {meta.error && meta.touched && (
              <div className='fetch-error-msg'>{meta.error}</div>
            )}
          </>
        )}
      </Field>
    </div>
  );
};

export default FetchFormItem;
