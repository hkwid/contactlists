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
      openModal,
      closeModal
    } = this.props;

    return (
      <div className="App">
        <ContactList
          contactLists={contactLists}
          openModal={openModal}
        />
        <ContactListModal
          modalType={modalType}
          showModal={showModal}
          closeModal={closeModal}
        />
      </div>
    );
  }
}

export default App;
