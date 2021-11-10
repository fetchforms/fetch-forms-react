import React from 'react';
import CheckboxField from '../elements/CheckboxField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormCheckbox = ({ field }) => {
  return (
    <div className='flex items-start'>
      <div className='flex items-center h-5'>
        <CheckboxField html={field.html} checked={field.initialValue} />
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

export default FetchFormCheckbox;
