import React, { Component } from 'react';
import './FieldInput.css';

class FieldInput extends Component {
  render() {
    const {
      input,
      label,
      type,
      meta: { touched, error, warning }
    } = this.props;

    return (
      <div>
        <label>{label}</label>
        <input {...input} name={name} placeholder={label} type={type}/>
        {touched && ((error && <span className="error">{error}</span>) || (warning && <span className="warning">{warning}</span>))}
      </div>
    )
  }
}

export default FieldInput;
