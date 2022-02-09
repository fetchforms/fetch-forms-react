export const hasValue = (value) => (value ? true : false);

export const biggerThan = (min, value) => {
  if (!value) {
    return true;
  }
  return (isNaN(value) ? value.length : value) >= min ? true : false;
};

export const smallerTan = (max, value) => {
  if (!value) {
    return true;
  }
  return max >= (isNaN(value) ? value.length : value) ? true : false;
};

export const validRegex = (regex, value) => {
  const expression = new RegExp(regex);
  if (!expression) {
    return false;
  }

  return expression.test(value);
};

export const validate = (values, validation) => {
  const errors = {};

  for (let i = 0; i < validation.length; i++) {
    const item = validation[i];
    const value = values[item.name];

    for (let j = 0; j < item.rules.length; j++) {
      const rule = item.rules[j];

      if (rule.rule === 'regex' && !validRegex(rule.limit, value)) {
        errors[item.name] = rule.message;
      } else if (rule.rule === 'min' && !biggerThan(rule.limit, value)) {
        errors[item.name] = rule.message;
      } else if (rule.rule === 'max' && !smallerTan(rule.limit, value)) {
        errors[item.name] = rule.message;
      } else if (rule.rule === 'required' && !hasValue(value)) {
        errors[item.name] = rule.message;
      }
    }
  }
  return errors;
};
