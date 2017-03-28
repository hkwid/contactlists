import React, { Component } from 'react';

class ContactForm extends Component {

  render() {
    const {
      firstName,
      lastName,
      phone,
      address,
      email
    } = this.props;

    return (
      <form>
        <span className="formLabel">First name:</span>
        <input type="text" name="firstname" value={firstName} />
        <br />
        <span className="formLabel">Last name:</span>
        <input type="text" name="lastname" value={lastName} />
        <br />
        <span className="formLabel">Phone Number:</span>
        <input type="text" name="phone" value={phone} />
        <br />
        <span className="formLabel">Address:</span>
        <input type="text" name="address" value={address} />
        <br />
        <span className="formLabel">Email:</span>
        <input type="text" name="email" value={email} />
        <br />
      </form>
    );
  }
}

export default ContactForm;
