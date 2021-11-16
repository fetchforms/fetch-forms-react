import React from 'react';
import SelectField from '../elements/SelectField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormSelect = ({ field, html }) => {
  return (
    <>
      <FetchLabel label={field.label} name={field.name} />
      <SelectField
        html={html}
        initialValue={field.initialValue}
        options={field.options}
      />
    </>
  );
};

export default FetchFormSelect;
