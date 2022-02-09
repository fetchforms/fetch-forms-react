import React from 'react';
import FetchLabel from '../elements/FetchLabel';
import { getFormat } from '../Formats';
import NumberFormat from 'react-number-format';

const FetchFormInput = ({ label, html, format }) => {
  const { numerical, css } = getFormat(format, html.type);

  if (numerical) {
    console.log(html.name, numerical);
  }

  return (
    <>
      <FetchLabel label={label} name={html.name} />
      {numerical ? (
        <NumberFormat
          {...numerical}
          name={html.name}
          value={html.value}
          onBlur={html.onBlur}
          onFocus={html.onFocus}
          onChange={(value) => html.onChange(value)}
          onValueChange={({ formattedValue }) => html.onChange(formattedValue)}
          className={`fetch-input ${css}`}
        />
      ) : (
        <input
          {...html}
          className={`fetch-input ${css}`}
          inputMode={html.type}
        />
      )}
    </>
  );
};

export default FetchFormInput;
