import React from 'react';

const CheckboxField = ({ html, checked }) => {
  // console.log(html);
  return (
    <input
      {...html}
      defaultChecked={checked}
      value=''
      className={`fetch-checkbox`}
    />
  );
};

export default CheckboxField;
