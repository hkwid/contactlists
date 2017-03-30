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
      loadData,
      addContact,
      editContact,
      deleteContact,
      sortContact
    } = this.props;

    return (
      <div className="App">
        <ContactList
          contactLists={contactLists}
          currentContactId={currentContactId}
          openModal={openModal}
          loadData={loadData}
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
