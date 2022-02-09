import React from 'react';
import InputField from '../elements/InputField';
import FetchLabel from '../elements/FetchLabel';
import { getFormat } from '../Formats';
// import NumberFormat from 'react-number-format';

const FetchFormInput = ({ label, html }) => {
  // const customFormat = getFormat(field.format, html.type);
  // // console.log(customFormat);

  //  if (customFormat.numerical) {
  //    return (
  //      <NumberFormat
  //        {...html}
  //        value={preload}
  //        className={`fetch-input ${customFormat.css}`}
  //        format={customFormat.numerical.format}
  //      />
  //    );
  //  }
  return (
    <>
      <FetchLabel label={label} name={html.name} />
      {/* {customFormat.numerical ? (
        <NumberFormat
          customInput={InputField}
          html={html}
          preload={field.value}
          format={customFormat.numerical.format}
          cssFormat={customFormat.css}
        />
      ) : ( */}
      <input {...html} className={`fetch-input`} />
      {/* )} */}
    </>
  );
};

export default FetchFormInput;
