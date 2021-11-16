import React, { useState } from 'react';
import RadioField from '../elements/RadioField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormRadio = ({ field, html }) => {
  const [checked, setChecked] = useState('');

  return (
    <div className='radio-group'>
      <FetchLabel label={field.label} name={field.fieldName} />
      {field.options.map((option) => (
        <div className='fetch-input-group' key={option.value}>
          <div className='input-group-field'>
            <RadioField
              html={{ ...html, value: option.value, id: option.value }}
              isChecked={checked === option.value}
              updateChecked={setChecked}
            />
          </div>
          <div className='input-group-label'>
            <FetchLabel
              label={option.label}
              name={option.value}
              noMargin={true}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FetchFormRadio;
