export const validate = () => {
  let errors = {};
  return errors;
};

const ErrorMessages = {
  required: 'Required',
  email: 'Invalid email address'
}

const Regex = {
  num: /^[0-9]+$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
};

export const required = value =>
  value ? undefined : ErrorMessages.required;

export const email = value =>
  value && !Regex.email.test(value) ? ErrorMessages.email : undefined;
