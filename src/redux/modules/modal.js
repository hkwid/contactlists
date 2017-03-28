//Actions
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// Initial State
const initialState = {
  modalType: 'add',
  showModal: false
};

//Action Creators
export function openModal(modalType){
  return {
    type: OPEN_MODAL,
    modalType
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
        showModal: true
      }
    );

  case CLOSE_MODAL:
    return Object.assign(
      {},
      state,
      {
        showModal: false
      }
    );

  default:
    return state;
  }
};
