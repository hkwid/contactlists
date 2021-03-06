import { connect } from 'react-redux';
import App from '../components/App';

import {
  addContact,
  editContact,
  deleteContact,
  sortContact
} from '../redux/modules/contact';

import {
  openModal,
  closeModal,
  loadData
} from '../redux/modules/modal';

function mapStateToProps(state) {
  return {
    contactLists: state.contact.contactLists,
    modalType: state.modal.modalType,
    showModal: state.modal.showModal,
    currentContactId: state.modal.currentContactId,
    contact: state.form.contact,
    sortFiled: state.form.sortFiled
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: (contact) => dispatch(addContact(contact)),
    editContact: (index, contact) => dispatch(editContact(index, contact)),
    deleteContact: (index) => dispatch(deleteContact(index)),
    sortContact: (fieldName) => dispatch(sortContact(fieldName)),
    openModal: (modalType, index) => dispatch(openModal(modalType, index)),
    closeModal: () => dispatch(closeModal()),
    loadData: (data) => dispatch(loadData(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
