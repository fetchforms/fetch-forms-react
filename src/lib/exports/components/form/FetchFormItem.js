import React from 'react';
import FetchFormField from './FetchFormField';

const FetchFormItem = ({ formItem }) => {
  //   console.log('formData', formItem);

  return (
    <div className='mt-4'>
      {formItem.fields.length > 1 && (
        <div className='text-gray-800 mb-2'>
          <label>{formItem.groupLabel}</label>
        </div>
      )}
      {formItem.fields.map((field) => (
        <FetchFormField fieldData={field} key={field.name} />
      ))}
      {/* TODO: add validation here */}
    </div>
  );
};

export default FetchFormItem;
