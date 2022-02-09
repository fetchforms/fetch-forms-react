export const getFormat = (formatStr, fieldType) => {
  let css = '';
  let numerical = null;

  if (!formatStr && fieldType === 'number') {
    numerical = {};
    numerical.thousandSeparator = ',';
    numerical.inputMode = 'numeric';
  }

  // All items below this require a formatStr
  if (!formatStr) {
    return { numerical, css };
  }

  numerical = {};

  if (formatStr.includes('#')) {
    numerical.format = formatStr;
  } else if (formatStr === 'currency') {
    numerical.thousandSeparator = ',';
    numerical.prefix = '$';
    numerical.inputMode = 'numeric';
  } else {
    css = formatStr;
    numerical = null;
  }

  return { numerical, css };
};
