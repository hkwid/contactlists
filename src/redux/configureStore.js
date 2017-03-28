import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import contact from './modules/contact';
import modal from './modules/modal';


const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore);

const reducer = combineReducers({
  contact,
  modal,
  form: formReducer
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);

export default configureStore;
