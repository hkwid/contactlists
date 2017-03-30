import React, { Component } from 'react';
import Modal from 'react-modal';
import ContactForm from './ContactForm';
import SortForm from './SortForm';

class ContactListModal extends Component {
  onAddHandler = (contact) => {
    this.props.addContact(contact);
    this.props.closeModal();
  }

  onEditHandler = (index, contact) => {
    this.props.editContact(index, contact);
    this.props.closeModal();
  }

  onDeleteHandler = (index) => {
    this.props.deleteContact(index);
    this.props.closeModal();
  }

  onSortHandler = (fieldName) => {
    this.props.sortContact(fieldName);
    this.props.closeModal();
  }

  onCancelHandler = () => {
    this.props.closeModal();
  }

  render() {
    const {
      contactLists,
      modalType,
      showModal,
      currentContactId,
      contact,
      sortFiled,
    } = this.props;

    const {
      onCancelHandler,
      onAddHandler,
      onEditHandler,
      onDeleteHandler,
      onSortHandler
    } = this;

    let modalContent = '';
    const currentContact = contactLists[currentContactId];

    switch(modalType) {
      case 'add':
        modalContent = (
          <div>
            <ContactForm />
            <button onClick={() => {onCancelHandler()}}>Cancel</button>
            <button onClick={() => {onAddHandler(contact.values)}}>Add</button>
          </div>
        );
        break;

      case 'edit':
        modalContent = (
          <div>
            <ContactForm />
            <button onClick={() => {onCancelHandler()}}>Cancel</button>
            <button onClick={() => {onEditHandler(currentContactId, contact.values)}}>Edit</button>
          </div>
        );
        break;

      case 'delete':
        modalContent = (
          <div>
            <p>Are you sure to delete this contact?</p>
            <p>{`${currentContact.firstName} ${currentContact.lastName}`}</p>
            <button onClick={() => {onCancelHandler()}}>Cancel</button>
            <button onClick={() => {onDeleteHandler(currentContactId)}}>Delete</button>
          </div>
        );
        break;

      case 'sort':
        modalContent = (
          <div>
            <p>Sort by</p>
            <SortForm/>
            <button onClick={() => {onCancelHandler()}}>Cancel</button>
            <button onClick={() => {onSortHandler(sortFiled.values.sortField)}}>Sort</button>
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
