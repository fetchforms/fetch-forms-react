import React from 'react';
// import NumberFormat from 'react-number-format';

const InputField = ({ html, preload, cssFormat }) => {
  // if (customFormat.numerical) {
  //   return (
  //     <NumberFormat
  //       {...html}
  //       value={preload}
  //       className={`fetch-input ${customFormat.css}`}
  //       format={customFormat.numerical.format}
  //     />
  //   );
  // }

  return (
    <input {...html} value={preload} className={`fetch-input ${cssFormat}`} />
  );
};

export default InputField;
