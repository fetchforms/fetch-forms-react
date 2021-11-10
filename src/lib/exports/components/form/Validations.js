export const isRequired = (msg) => (value) => value ? undefined : msg;

export const minValue = (min, msg) => (value) =>
  isNaN(value) || value >= min ? undefined : msg;

export const maxValue = (max, msg) => (value) =>
  isNaN(value) || max >= value ? undefined : msg;

export const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );
