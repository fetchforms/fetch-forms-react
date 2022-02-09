import React from 'react';
import FetchLabel from '../FetchLabel';

const FetchFormCheckbox = ({ label, html }) => {
  return (
    <div className='fetch-input-group'>
      <div className='input-group-field'>
        <input {...html} className={`fetch-checkbox`} />
      </div>
      <div className='input-group-label'>
        <FetchLabel label={label} name={html.name} noMargin={true} />
      </div>
    </div>
  );
};

export default FetchFormCheckbox;
