import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import FieldForm from './FieldInput';
import { loadData } from '../redux/modules/modal';
import * as validate from '../utils/validate';

class ContactForm extends Component {

  render() {
    return (
      <form>
        <Field
          name="firstName"
          component={FieldForm}
          type="text"
          label="First Name "
          validate={validate.required}
        />
        <Field
          name="lastName"
          component={FieldForm}
          type="text"
          label="Last Name "
          validate={validate.required}
        />
        <Field
          name="phone"
          component={FieldForm}
          type="text"
          label="Phone Number"
          validate={validate.required}
        />
        <Field
          name="address"
          component={FieldForm}
          type="text"
          label="Address"
          validate={validate.required}
        />
        <Field
          name="email"
          component={FieldForm}
          type="email"
          label="Email"
          validate={validate.email}
        />
      </form>
    );
  }
}

// Decorate the form component
ContactForm = reduxForm({
  form: 'contact'
})(ContactForm);

ContactForm = connect(
  state => ({
    initialValues: state.modal.data
  }),
  { load: loadData }
)(ContactForm);

export default ContactForm;
