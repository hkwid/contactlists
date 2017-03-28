import React, { Component } from 'react';
import './ContactList.css';

class ContactList extends Component {

  render() {
    const { contactLists, openModal } = this.props;

    return (
      <div className="ContactListWrap">
        <table className="ContactList">
          <thead className="ContactListHead">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Email</th>
              <th>
                <button type="button" onClick={() => openModal('add')}>Add</button>
              </th>
              <th>
                <button>Sort</button>
              </th>
            </tr>
          </thead>
          <tbody className="ContactListBody">
            {contactLists.map(contact =>
              <tr className="" key={contact._id}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phone}</td>
                <td>{contact.address}</td>
                <td>{contact.email}</td>
                <td><button type="button" onClick={() => openModal('edit')}>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
