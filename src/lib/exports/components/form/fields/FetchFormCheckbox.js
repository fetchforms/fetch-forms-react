import React from 'react';
import CheckboxField from '../elements/CheckboxField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormCheckbox = ({ field, html }) => {
  return (
    <div className='fetch-input-group'>
      <div className='input-group-field'>
        <CheckboxField html={html} checked={field.initialValue} />
      </div>
      <div className='input-group-label'>
        <FetchLabel label={field.label} name={field.name} noMargin={true} />
      </div>
    </div>
  );
};

export default FetchFormCheckbox;
