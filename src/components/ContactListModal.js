import React, { Component } from 'react';
import Modal from 'react-modal';
import ContactForm from './ContactForm';

class ContactListModal extends Component {
  onAddHandler = (contact) => {
    this.props.addContact(contact);
    this.props.closeModal();
  }

  onEditHandler = (contact, index) => {
    this.props.EditContact(contact);
    this.props.closeModal();
  }

  onDeleteHandler = (index) => {
    console.log(index);
    this.props.deleteContact(index);
    this.props.closeModal();
  }

  onCancelHander = () => {
    this.props.closeModal();
  }

  render() {
    const {
      contactLists,
      modalType,
      showModal,
      currentContactId,
      contact
    } = this.props;

    const {
      onCancelHander,
      onAddHandler,
      onEditHandler,
      onDeleteHandler
    } = this;

    let modalContent = '';
    const currentContact = contactLists[currentContactId];

    switch(modalType) {
      case 'add':
        modalContent = (
          <div>
            <ContactForm />
            <button onClick={() => {onCancelHander()}}>Cancel</button>
            <button onClick={() => {onAddHandler(contact.values)}}>Add</button>
          </div>
        );
        break;

      case 'edit':
        modalContent = (
          <div>
            <ContactForm />
            <button onClick={() => {onCancelHander();}}>Cancel</button>
            <button onClick={() => {onEditHandler(currentContactId, contact.values);}}>Edit</button>
          </div>
        );
        break;

      case 'delete':
        modalContent = (
          <div>
            <p>Are you sure to delete this contact?</p>
            <p>{`${currentContact.firstName} ${currentContact.lastName}`}</p>
            <button onClick={() => {onCancelHander();}}>Cancel</button>
            <button onClick={() => {onDeleteHandler(currentContactId);}}>Delete</button>
          </div>
        );
        break;
      case 'sort':
        modalContent = (
          <div>
            <p>Sort by</p>
            <form>
              <input type="radio" name="sort" value="firstName" checked /> First Name<br/>
              <input type="radio" name="sort" value="lastName" /> Last Name<br/>
              <input type="radio" name="sort" value="phone" /> PhoneNumber<br/>
              <input type="radio" name="sort" value="address" /> Address<br/>
              <input type="radio" name="sort" value="email" /> Email<br/>
            </form>
            <button onClick={() => {onCancelHander();}}>Cancel</button>
            <button onClick={() => {onCancelHander();}}>Sort</button>
          </div>
        );
        break;
      default:
        break;
    }

    return (
      <Modal
        isOpen={showModal}
        contentLabel="modal"
      >
        {modalContent}
      </Modal>
    );
  }
}

export default ContactListModal;
