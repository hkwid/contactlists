import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
// const  { DOM: { input } } = React;


class SortForm extends Component {

  render() {
    return (
      <form>
        <div>
          <label>
            <Field
              name="sort"
              component="input"
              type="radio"
              value="firstName"
            />
            {' First Name'}
          </label><br/>
          <label>
            <Field
              name="sort"
              component="input"
              type="radio"
              value="lastName"
            />
            {' Last Name'}
          </label><br/>
          <label>
            <Field
              name="sort"
              component="input"
              type="radio"
              value="phone"
            />
            {' Phone Number'}
          </label><br/>
          <label>
            <Field
              name="sort"
              component="input"
              type="radio"
              value="address"
            />
            {' Address'}
          </label><br/>
          <label>
            <Field
              name="sort"
              component="input"
              type="radio"
              value="email"
            />
            {' Email'}
          </label><br/>
        </div>
      </form>
    );
  }
}

// Decorate the form component
SortForm = reduxForm({
  form: 'sortFiled'
})(SortForm);

export default SortForm;
