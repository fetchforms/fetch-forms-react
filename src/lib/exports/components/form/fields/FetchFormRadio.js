import React from 'react';
import RadioField from '../elements/RadioField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormCheckbox = ({ field }) => {
  return (
    <div className='flex items-start'>
      <div className='flex items-center h-5'>
        <RadioField html={field.html} />
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
