import React from 'react';
import CheckboxRadioField from '../elements/CheckboxRadioField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormCheckboxRadio = ({ field }) => {
  return (
    <div className='flex items-start'>
      <div className='flex items-center h-5'>
        <CheckboxRadioField html={field.html} checked={field.value} />
      </div>
      <div className='ml-3'>
        <FetchLabel
          label={field.label}
          name={field.html.name}
          noMargin={true}
        />
      </div>
    </div>
  );
};

export default FetchFormCheckboxRadio;
