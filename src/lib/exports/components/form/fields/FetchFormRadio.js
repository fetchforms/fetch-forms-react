import React from 'react';
import RadioField from '../elements/RadioField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormCheckbox = ({ field }) => {
  return (
    <div className='fetch-input-group'>
      <div className='input-group-field'>
        <RadioField html={field.html} />
      </div>
      <div className='input-group-label'>
        <FetchLabel
          label={field.label}
          name={field.html.value}
          noMargin={true}
        />
      </div>
    </div>
  );
};

export default FetchFormCheckbox;
