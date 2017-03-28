import { connect } from 'react-redux';
import App from '../components/App';

import {
  addContact,
  editContact,
  deleteContact
} from '../redux/modules/contact';

import {
  openModal,
  closeModal
} from '../redux/modules/modal';

function mapStateToProps(state) {
  return {
    contactLists: state.contact.contactLists,
    modalType: state.modal.modalType,
    showModal: state.modal.showModal,
    currentContactId: state.modal.currentContactId
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
    editContact: (index, contact) => dispatch(editContact(index, contact)),
    deleteContact: (index) => dispatch(deleteContact(index)),
    openModal: (modalType, index) => dispatch(openModal(modalType, index)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
