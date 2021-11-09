import React from 'react';
import TextField from '../elements/TextField';
import FetchLabel from '../elements/FetchLabel';

const FetchFormText = ({ field }) => {
  // console.log(field);
  return (
    <>
      <FetchLabel label={field.label} name={field.html.name} />
      <TextField html={field.html} preload={field.value} />
    </>
  );
};

export default FetchFormText;
