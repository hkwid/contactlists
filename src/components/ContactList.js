import React, { Component } from 'react';
import './ContactList.css';

class ContactList extends Component {
  onAddHandler = () => {
    this.props.openModal('add');
    this.props.loadData({});
  }

  onEditHandler = (index) => {
    this.props.openModal('edit', index);
    const currentContact = this.props.contactLists[index];
    this.props.loadData(currentContact);
  }

  onDeleteHandler = (index) => {
    this.props.openModal('delete', index);
  }

  onSortHandler = () => {
    this.props.openModal('sort');
  }

  render() {
    const { contactLists, openModal } = this.props;
    const {
      onAddHandler,
      onEditHandler,
      onDeleteHandler,
      onSortHandler
    } = this;


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
                <button type="button" onClick={onAddHandler}>Add</button>
              </th>
              <th>
                <button type="button" onClick={onSortHandler}>Sort</button>
              </th>
            </tr>
          </thead>
          <tbody className="ContactListBody">
            {contactLists.map((contact, index) =>
              <tr className="" key={`contact-${index}`}>
                <td>{contact.firstName}</td>
                <td>{contact.lastName}</td>
                <td>{contact.phone}</td>
                <td>{contact.address}</td>
                <td>{contact.email}</td>
                <td><button type="button" onClick={() => { onEditHandler(index)}}>Edit</button></td>
                <td><button type="button" onClick={() => {onDeleteHandler(index)}}>Delete</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ContactList;
