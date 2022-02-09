import React from 'react';
import FetchLabel from '../FetchLabel';
import { getFormat } from '../../../scripts/Formats';
import NumberFormat from 'react-number-format';

const FetchFormInput = ({ label, html, format }) => {
  const { numerical, css } = getFormat(format, html.type);

  return (
    <>
      <FetchLabel label={label} name={html.name} />
      {numerical ? (
        <NumberFormat
          {...numerical}
          type='text'
          name={html.name}
          value={html.value}
          onBlur={html.onBlur}
          onFocus={html.onFocus}
          onValueChange={({ floatValue, formattedValue }) => {
            html.onChange(html.type === 'number' ? floatValue : formattedValue);
          }}
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
