import React, { Component } from 'react';
import Modal from 'react-modal';
// import ContactForm from './ContactForm';

class ContactListModal extends Component {
  onCancelHander = () => {
    this.props.closeModal();
    console.log('here!');
  }

  render() {
    const {
      modalType,
      showModal
    } = this.props;
    const onCancelHander = this.onCancelHander;

    console.log(this.props);

    let modalContent = '';

    switch(modalType) {
      case 'add':
        modalContent = (
          <div>
            <p>add</p>
            <button onClick={() => {onCancelHander(); console.log('click')}}>Cancel</button>
            <button onClick={() => onCancelHander}>Add</button>
          </div>
        );
        break;

      case 'edit':
        modalContent = (
          <div>
            <p>edit</p>
            <button onClick={() => onCancelHander}>Cancel</button>
            <button onClick={() => onCancelHander}>Edit</button>
          </div>
        );
        break;

      case 'delete':
        modalContent = (
          <div>
            <p>Are you sure to delete this contact?</p>
            <button>Cancel</button>
            <button>Delete</button>
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
