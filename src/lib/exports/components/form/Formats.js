export const getFormat = (formatStr, fieldType) => {
  let css = '';
  let numerical = null;

  if (!formatStr && fieldType === 'number') {
    numerical = {};
    numerical.thousandSeparator = true;
    numerical.inputMode = 'numeric';
  }

  // All items below this require a formatStr
  if (!formatStr) {
    return { numerical, css };
  }

  numerical = {};

  if (formatStr.includes('#')) {
    numerical.displayType = 'text';
    numerical.format = formatStr;
  } else if (formatStr === 'currency') {
    numerical.format = formatCurrency;
    numerical.inputMode = 'numeric';
  } else {
    css = formatStr;
    numerical = null;
  }

  return { numerical, css };
};

function formatCurrency(val) {
  const withCommas = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$${withCommas}`;
}
