import React from 'react';
import FetchLabel from '../FetchLabel';

const FetchFormRadio = ({ label, options, fieldName, html }) => {
  const [checked, setChecked] = React.useState('');

  return (
    <div className='radio-group'>
      <FetchLabel label={label} name={fieldName} />
      {options.map((option) => (
        <div className='fetch-input-group' key={option.value}>
          <div className='input-group-field'>
            <input
              {...html}
              value={option.value}
              id={option.value}
              onClick={(e) => setChecked(e.target.value)}
              className={`fetch-radio ${
                checked === option.value ? 'checked' : ''
              }`}
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
