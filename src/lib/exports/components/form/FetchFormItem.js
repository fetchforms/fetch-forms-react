import React from 'react';
import { Field } from 'react-final-form';
import FetchFormCheckbox from './fields/FetchFormCheckbox';
import FetchFormRadio from './fields/FetchFormRadio';
import FetchFormSelect from './fields/FetchFormSelect';
import FetchFormText from './fields/FetchFormText';
import FetchFormTextarea from './fields/FetchFormTextarea';

const FetchFormItem = ({ formItem }) => {
  // console.log('formData', formItem);

  const chooseField = (field, input) => {
    const html = {
      ...field.fieldHtml,
      ...input
    };

    switch (field.fieldType) {
      case 'select':
        return <FetchFormSelect field={field} html={html} />;
      case 'checkbox':
        return <FetchFormCheckbox field={field} html={html} />;
      case 'radio':
        return <FetchFormRadio field={field} html={html} />;
      case 'textarea':
        return <FetchFormTextarea field={field} html={html} />;
      default:
        return <FetchFormText field={field} html={html} />;
    }
  };

  return (
    <div className='fetch-form-item'>
      {/* {formItem.fields.map((field, i) => ( */}
      <Field
        name={formItem.name}
        type={formItem.fieldType}
        value={formItem.fieldHtml.value}
      >
        {({ input, meta }) => (
          <>
            {chooseField(formItem, input)}
            {meta.error && meta.touched && (
              <div className='fetch-error-msg'>{meta.error}</div>
            )}
          </>
        )}
      </Field>
      {/* ))} */}
    </div>
  );
};

export default FetchFormItem;
