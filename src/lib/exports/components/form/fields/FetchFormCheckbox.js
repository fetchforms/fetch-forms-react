import React from 'react';
import CheckboxField from '../elements/CheckboxField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormCheckbox = ({ field }) => {
  return (
    <div className='fetch-input-group'>
      <div className='input-group-field'>
        <CheckboxField html={field.html} checked={field.initialValue} />
      </div>
      <div className='input-group-label'>
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
