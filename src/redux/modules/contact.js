import dummyContacts from '../../../dummy_contact.json';
import getSortedObjectArray from '../../utils/objectArraySort';

//Actions
const ADD_CONTACT = 'ADD_CONTACT';
const EDIT_CONTACT = 'EDIT_CONTACT';
const DELETE_CONTACT = 'DELETE_CONTACT';
const SORT_CONTACT = 'SORT_CONTACT';

// Initial State
export const initialState = {
  contactLists: dummyContacts
};

//Action Creators
export function addContact(contact) {
  return {
    type: ADD_CONTACT,
    contact
  }
};

export function editContact(index, contact) {
  return {
    type: EDIT_CONTACT,
    index,
    contact
  }
};

export function deleteContact(index) {
  return {
    type: DELETE_CONTACT,
    index
  }
};

export function sortContact(fieldName) {
  return {
    type: SORT_CONTACT,
    fieldName
  }
}

// Reducers
export default function reducer(state = initialState, action){
  switch (action.type){
  case ADD_CONTACT:
    return Object.assign(
      {},
      state,
      {
        contactLists: [...state.contactLists, action.contact]
      }
    );
  case EDIT_CONTACT:
    return Object.assign(
      {},
      state,
      {
        contactLists: [
          ...state.contactLists.slice(0, action.index),
          Object.assign({}, state.contactLists[action.index], action.contact),
          ...state.contactLists.slice(action.index + 1)
        ]
      }
    );
  case DELETE_CONTACT:
    return Object.assign(
      {},
      state,
      {
        contactLists: [
          ...state.contactLists.slice(0, action.index),
          ...state.contactLists.slice(action.index + 1)
        ]
      }
    );
  case SORT_CONTACT:
    return Object.assign(
      {},
      state,
      {
        contactLists: getSortedObjectArray(state.contactLists, action.fieldName, 'asc')
      }
    );
  default:
    return state;
  }
}
