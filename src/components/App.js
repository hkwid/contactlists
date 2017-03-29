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
      sortFiled,
      openModal,
      closeModal,
      addContact,
      editContact,
      deleteContact,
      sortContact
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
          sortFiled={sortFiled}
          closeModal={closeModal}
          addContact={addContact}
          editContact={editContact}
          deleteContact={deleteContact}
          sortContact={sortContact}
        />
      </div>
    );
  }
}

export default App;
