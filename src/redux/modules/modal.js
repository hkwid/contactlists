//Actions
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const LOAD = 'LOAD';

// Initial State
export const initialState = {
  modalType: 'add',
  showModal: false,
  currentContactId: 0,
  data: {}
};

//Action Creators
export function openModal(modalType, currentContactId) {
  return {
    type: OPEN_MODAL,
    modalType,
    currentContactId
  }
};

export function closeModal(){
  return {
    type: CLOSE_MODAL
  }
};

export function loadData(data) {
  return {
    type: LOAD,
    data
  }
}

// Reducers
export default function reducer(state = initialState, action) {
  switch (action.type){

  case OPEN_MODAL:
    return Object.assign(
      {},
      state,
      {
        modalType: action.modalType,
        showModal: true,
        currentContactId: action.currentContactId
      }
    );

  case CLOSE_MODAL:
    return Object.assign(
      {},
      state,
      {
        showModal: false,
        currentContactId: 0
      }
    );

  case LOAD:
    return Object.assign(
      {},
      state,
      {
        data: action.data
      }
    )

  default:
    return state;
  }
};
