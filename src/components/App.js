import React, { Component } from 'react';
import './App.css';
import ContactList from '../components/ContactList';
import ContactListModal from '../components/ContactListModal';

class App extends Component {
  render() {
    const {
      contactLists,
      modalType,
      showModal,
      currentContactId,
      contact,
      openModal,
      closeModal,
      addContact,
      editContact,
      deleteContact
    } = this.props;

    return (
      <div className="App">
        <ContactList
          contactLists={contactLists}
          openModal={openModal}
        />
        <ContactListModal
          contactLists={contactLists}
          modalType={modalType}
          showModal={showModal}
          currentContactId={currentContactId}
          contact={contact}
          closeModal={closeModal}
          addContact={addContact}
          editContact={editContact}
          deleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
