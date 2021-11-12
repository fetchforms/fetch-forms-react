import React from 'react';
import { Field } from 'react-final-form';
import FetchFormCheckbox from './fields/FetchFormCheckbox';
import FetchFormRadio from './fields/FetchFormRadio';
import FetchFormSelect from './fields/FetchFormSelect';
import FetchFormText from './fields/FetchFormText';
import FetchFormTextarea from './fields/FetchFormTextarea';

const FetchFormItem = ({ formItem }) => {
  //   console.log('formData', formItem);

  const chooseField = (field, input) => {
    field.html = {
      ...field.html,
      ...input
    };

    switch (field.html.type) {
      case 'select':
        return <FetchFormSelect field={field} />;
      case 'checkbox':
        return <FetchFormCheckbox field={field} />;
      case 'radio':
        return <FetchFormRadio field={field} />;
      case 'textarea':
        return <FetchFormTextarea field={field} />;
      default:
        return <FetchFormText field={field} />;
    }
  };

  const isLastItem = (index, length) => {
    return index === length - 1;
  };

  return (
    <div className='fetch-form-item'>
      {formItem.fields.length > 1 && (
        <div className='fetch-group-label'>{formItem.groupLabel}</div>
      )}

      {formItem.fields.map((field, i) => (
        <Field
          name={field.html.name}
          key={`${field.html.name}_${i}`}
          type={field.html.type}
          value={field.html.value}
        >
          {({ input, meta }) => (
            <>
              {chooseField(field, input)}
              {isLastItem(i, formItem.fields.length) &&
                meta.error &&
                meta.touched && (
                  <div className='fetch-error-msg'>{meta.error}</div>
                )}
            </>
          )}
        </Field>
      ))}
    </div>
  );
};

export default FetchFormItem;
