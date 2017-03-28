import React, { Component } from 'react';
import './ContactList.css';
import dummyContacts from '../../dummy_contact.json';

class ContactList extends Component {

  render() {
    const listItems = dummyContacts.map((contact) => {
      return (
        <tr className="" key={contact._id}>
          <td>{contact.firstName}</td>
          <td>{contact.lastName}</td>
          <td>{contact.phone}</td>
          <td>{contact.address}</td>
          <td>{contact.email}</td>
          <td><button>Edit</button></td>
          <td><button>Delete</button></td>
        </tr>
      );
    });

    return (
      <div className="ContactListWrap">
        <table className="ContactList">
          <thead className="ContactListHead">
            <tr>
              <th>First Name ^</th>
              <th>Last Name</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Email</th>
              <th><button>Add</button></th>
              <th><button>Sort</button></th>
            </tr>
          </thead>
          <tbody className="ContactListBody">
            {listItems}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
