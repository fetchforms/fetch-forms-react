import React from 'react';
import CheckboxRadioField from '../elements/CheckboxRadioField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormCheckboxRadio = ({ field }) => {
  return (
    <div class='flex items-start'>
      <div class='flex items-center h-5'>
        <CheckboxRadioField html={field.html} checked={field.value} />
      </div>
      <div class='ml-3'>
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
