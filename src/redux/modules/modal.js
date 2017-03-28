//Actions
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// Initial State
const initialState = {
  modalType: 'add',
  showModal: false,
  currentContactId: 0
};

//Action Creators
export function openModal(modalType, currentContactId){
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

// Reducers
export default function reducer(state = initialState, action){
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

  default:
    return state;
  }
};
