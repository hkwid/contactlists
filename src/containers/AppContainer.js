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
    showModal: state.modal.showModal
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
    editContact: (index, contact) => dispatch(editContact(index, contact)),
    deleteContact: (index) => dispatch(deleteContact(index)),
    openModal: (modalType) => dispatch(openModal(modalType)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
