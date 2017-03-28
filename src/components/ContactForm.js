import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {

  render() {
    return (
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <Field
            name="firstName"
            component="input"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <Field
            name="lastName"
            component="input"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <Field
            name="phone"
            component="input"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <Field
            name="address"
            component="input"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <Field
            name="email"
            component="input"
            type="email"
          />
        </div>
      </form>
    );
  }
}

// Decorate the form component
ContactForm = reduxForm({
  form: 'contact'
})(ContactForm);

export default ContactForm;
